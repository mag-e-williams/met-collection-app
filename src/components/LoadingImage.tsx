import React, { useState } from 'react';
import { Box, Skeleton, Typography } from "@mui/material";
import { ImageOff } from 'lucide-react';
import { Ring } from '@uiball/loaders'

import Image from "next/image";

type ObjectThumbnailProps =  {
  image?: string;
};

type NoImageSkeletonProps = {
  children:  React.ReactNode
}

function NoImageSkeleton({children}: NoImageSkeletonProps)  {
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
        {children}
      </Typography>
    </Box>
  )
}

export default function LoadingImage({image}: ObjectThumbnailProps) {
  const [loaded, setLoaded] = useState<boolean>(false);
  
  return (
    <>
      {image ? (<>     
        {!loaded && (
          <NoImageSkeleton> 
            <Ring 
              size={30}
              lineWeight={5}
              speed={2} 
              color="#a3a3a3"
            />
          </NoImageSkeleton>
        )}

        <Box style={{ width: '100%', height: 0, paddingTop: '100%', position: 'relative' }}>
          <Image
            onLoadingComplete={() => setLoaded(true)} 
            src={`${image}?auto=format`}
            alt={image}
            fill
            style={{objectFit: 'contain'}}
            loading="lazy"
          />
        </Box> 
    </> ) : (
      <NoImageSkeleton> 
        <ImageOff size={30} color="#a3a3a3" />
      </NoImageSkeleton>
    )}
    </>
  )
}