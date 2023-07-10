import React, { useEffect, useState } from 'react';
import { MetObjectsData } from "@/types/MetObjectsData";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useRouter } from 'next/router';

import LoadingImage from './LoadingImage';

type ObjectListProps =  {
  objects?: MetObjectsData[];
};

export default function CollectionList({objects}: ObjectListProps) {
  const router = useRouter();
  const [collection, setCollection] = useState<MetObjectsData[]>();

  useEffect(() => {
    if (objects) {
      setCollection(objects);
    }
  }, [objects]);

  if (!collection) {  
    return null
  }


  const handleRowClick = (objectID: Number) => {
    router.push(`/collection/${objectID}`);
  };

  return (
    <ImageList sx={{ width: 'auto', height: 'auto' }} cols={4} rowHeight={270}>
      {collection.slice(0,40).map((item) => (
        <ImageListItem 
          onClick={() => handleRowClick(item.objectID)}
          key={item.objectID} 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            position: 'relative',
            padding: 2,
            paddingBottom: '50px',
            borderRadius: 1,
            '&:hover': {
              backgroundColor: '#f0f0f0',
              cursor: 'pointer',
            }
          }}>
            
        <Box sx={{width: '100%'}}>
          <LoadingImage image={item.primaryImageSmall}/>
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

