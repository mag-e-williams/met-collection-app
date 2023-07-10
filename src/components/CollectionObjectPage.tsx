import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { MetObjectsData } from '@/types/MetObjectsData';

import { Box, Breadcrumbs, Link, Typography, Container, Grid, Divider, Stack, ImageList } from '@mui/material';
import { useData } from '@/api/useData';
import LoadingImage from './LoadingImage';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ComponentDetails from './ComponentDetails';
import ImageCarousel from './ImageCarousel';

export default function CollectionObjectPage() {
  const router = useRouter();

  const [fetchedDetails, setFetchedDetails] = useState<MetObjectsData>();
  const { data, error, isValidating } = useData('/api' + router.asPath);

  useEffect(() => {
    if (data && !data.error) {
      setFetchedDetails(data.response);
    }
  }, [data]);
  console.log(fetchedDetails);
  if (!fetchedDetails) {
    return null;
  }

  return (
    <Box sx={{ height: '100vh',  paddingTop: 12 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/collection">
          The Collection
        </Link>
        <Link underline="hover" color="inherit" href="/collection">
          {fetchedDetails.department}
        </Link>
      </Breadcrumbs>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          alignItems="center"
        >
          <Grid item xs={12} md={7}>
            <Container>
              <Typography variant="h4" sx={{ marginBottom: 1 }}>
                {fetchedDetails.title}
              </Typography>
              <Typography variant="body1">
                {fetchedDetails.artistNationality} {fetchedDetails.artistDisplayName} {fetchedDetails.artistNationality}
              </Typography>
              <Typography variant="body1">
                {fetchedDetails.objectDate}
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginY: 4 }}>
                <LocationOnIcon sx={{ marginRight: '0.25em' }} />
                {fetchedDetails.GalleryNumber ? `On view at ${fetchedDetails.department} in Gallery ${fetchedDetails.GalleryNumber}` : 'Not on View'}
              </Typography>
            </Container>
          </Grid>

          <Grid item xs={12} md={5} sx={{ width: '100%', height: '100%'}} >
          
            <ImageCarousel images={[fetchedDetails.primaryImage, ...fetchedDetails.additionalImages]} />
            
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <ComponentDetails />
    </Box>
  );
}
