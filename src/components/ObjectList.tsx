import React, { useState } from 'react';
import { MetObjectsData } from "@/types/MetObjectsData";
import { Box, Container, ImageList, ImageListItem, ImageListItemBar, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useRouter } from 'next/router';
import { ImageOff } from 'lucide-react';

import Image from "next/image";

type ObjectThumbnailProps =  {
  image?: string;
};

function NoImageSkeleton() {
  return (
    <Box  
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Skeleton 
        animation={false} 
        variant="rectangular" 
        height={200} 
        style={{
          backgroundColor: '#fff',
          width: '100%',
          borderRadius: 1,
        }}
      />
      <Typography
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        > 
        <ImageOff size={30} color="#a3a3a3" />
      </Typography>
    </Box>
  )
}

function ObjectThumbnail({image}: ObjectThumbnailProps) {
  const [loaded, setLoaded] = useState<boolean>(false);
  
  return (
    <>
      {image ? (
        <Image
          onLoad={() => setLoaded(true)} 
          src={`${image}?auto=format`}
          alt={image}
          width={0}
          height={0}
          loading="lazy"
          sizes="100vw"
          style={{
            borderRadius: 1,
            display: 'block',
            width: '100%',
            height: 'auto',
        }}/>
      ) : (
        <NoImageSkeleton />
      )}
    </>
  )
}

type ObjectListProps =  {
  objects?: MetObjectsData[];
};

export default function ObjectList({objects}: ObjectListProps) {
  const router = useRouter();

  if (!objects) {
    return null
  }

  const handleRowClick = (objectID: Number) => {
    router.push(`/collection/${objectID}`);
  };

  return (
    <ImageList sx={{ width: 'auto', height: 'auto' }} cols={4}>
      {objects.map((item) => (
        <ImageListItem 
          onClick={() => handleRowClick(item.objectID)}
          key={item.objectID} 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            position: 'relative',
            padding: 2,
            paddingBottom: '50px',
            '&:hover': {
              backgroundColor: '#c7c7c7',
              cursor: 'pointer'
            }
          }}>
          <Box sx={{width: '100%'}}>
            <ObjectThumbnail image={item.primaryImage}/>
          </Box>

          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.objectDate}</span>}
            position="below"
            sx={{ 
              marginX: 2, 
              position:'absolute', 
              bottom: 0,
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

