import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material';

import { fetchMetData } from '@/api/fetchMetData';
import { MetObject } from '@/types/MetObject';
import Header from './Header';

const COLS = [
  {
    id: 'title', 
    name: 'Title'  
  },
  {
    id: 'objectEndDate', 
    name: 'Date'  
  },
  {
    id: 'department', 
    name: 'Department'  
  },
  {
    id: 'objectName', 
    name: 'Name'  
  },
  {
    id: 'artistDisplayName', 
    name: 'Artist'  
  },
]

export function Homepage() {
  const router = useRouter();
  const [museumObjects, setMuseumObjects] = useState<MetObject[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [totalPages, setTotalPages] = useState<number>();

  const inputRef = React.useRef<HTMLInputElement>(null); // Define inputRef here

  useEffect(() => {
    const fetchObjects = async () => {
      const response = await fetchMetData(searchTerm);
      console.log(response)
      setMuseumObjects(response);
    }

    fetchObjects()
  }, [page, searchTerm]);

  const updateURL = (selectedPage: number, term: string) => {
    const queryParams = new URLSearchParams({
      page: selectedPage.toString(),
      search: term,
    });

    router.push(`/?${queryParams.toString()}`);
  };

  const handleSearch = async (event: React.FocusEventHandler<HTMLInputElement>) => {
    const term = event.target.value;
    console.log(term)
    setPage(page);
    setSearchTerm(term);
    updateURL(page, term);
  };

  return (
    <>
      <Header searchTerm={searchTerm} onSearchTerm={handleSearch} />
      
      <Container sx={{ marginTop: 16}}>
        <Stack spacing={2}>

        {museumObjects.map(obj => (
          <Card sx={{ display: 'flex' }} key={obj.objectID}>
          
          <CardMedia
            component="img"
            sx={{ width: 151}}
            image={obj.primaryImage}
            alt="No Image Found"
          />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href={obj.objectURL}
                  target="_blank"
                  sx={{
                    mr: 2,
                    display: { md: 'flex' },
                    textDecoration: 'none',
                    flexGrow: 1,
                  }}
                >
                {obj.title}
              </Typography>

              <Typography variant="body1" component="div">
                {obj.department} 
              </Typography>

              <Typography variant="body1" component="div">
                {obj.objectDate} 
              </Typography>

              <Typography variant="body1" component="div">
                {obj.creditLine}
              </Typography>
                
            <Typography variant="body1" component="div">
              {obj.isHighlight ? 'On Display' : 'Not On Display'}
            </Typography>
            </CardContent>

          </Box>

        </Card>

        ))}
        </Stack>

      </Container>
    
    </>
  );
}
