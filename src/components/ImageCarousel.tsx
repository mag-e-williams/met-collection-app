import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { MetObjectsData } from '@/types/MetObjectsData';

import { Box, Breadcrumbs, Link, Typography, Container, Grid, Divider, Stack, ImageList, Button } from '@mui/material';
import { useData } from '@/api/useData';
import LoadingImage from './LoadingImage';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ComponentDetails from './ComponentDetails';
type ImageCarouselProps = {
  images: string[]
}

export default function ImageCarousel({images}: ImageCarouselProps) {
  const [ selectedIndex, setSelectedIndex ] = useState<number>(0)

  return (
    <>
      <Grid sx={{ width: '100%', height: '100%', backgroundColor: '#f8f8f8', padding: 2}} >
        <LoadingImage image={images[selectedIndex]} />
      </Grid>

      {images.length && false > 1 && (
        <ImageList sx={{ width: 'auto', height: 'auto' }} cols={8} rowHeight={200}>
          {images.map((e, i) => (
            <Button key={e} onClick={() => setSelectedIndex(i)}>
            <LoadingImage  image={e} />
            </Button>
          ))}
        </ImageList> 
      )}
    </>
  );
}
