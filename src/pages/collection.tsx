import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { fetchMetObjects } from '@/api/fetchMetObjects';
import { fetchMetObjectsData } from '@/api/fetchMetObjectsData';

import type { MetObjectsData } from '@/types/MetObjectsData';
import type { MetObjects } from '@/types/MetObjects';

import Header from '@/components/Header';
import ObjectList from '@/components/ObjectList';

import { Container, Pagination, Stack, Typography } from '@mui/material';
import Filters from '@/components/Filters';

const PAGE_SIZE = 40;

export default function Collection() {
  const router = useRouter();
  const [museumObjects, setMuseumObjects] = useState<MetObjects>();
  const [museumObjectsData, setMuseumObjectsData] = useState<MetObjectsData[]>([]);

  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [totalPages, setTotalPages] = useState<number>();


  useEffect(() => {
    const fetchObjects = async () => {
      const response = await fetchMetObjects(searchTerm);
      setMuseumObjects(response)
      setTotalPages(Math.ceil(response.total / PAGE_SIZE))
    }
    if (searchTerm) {
      fetchObjects()
    }
  }, [searchTerm, setMuseumObjects, setTotalPages]);

  useEffect(() => {
    const fetchObjectsData = async () => {
      if (museumObjects) {
        const response = await fetchMetObjectsData(museumObjects.objectIDs, page, PAGE_SIZE);
        setMuseumObjectsData(response)
      }
    }

    fetchObjectsData()
  }, [museumObjects, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
    event.stopPropagation;
    setPage(selectedPage);
    updateURL(selectedPage, searchTerm);
  };

  const handleSearch = (e: string) => {
    setSearchTerm(e)
    setPage(1);
    updateURL(page, e);
  };

  const updateURL = (selectedPage: number, term?: string) => {
    let queryParams = new URLSearchParams();
    if (selectedPage) {
      queryParams.append('page',  selectedPage.toString())
    }
    if (term) {
      queryParams.append('search', term)
    }

    router.push(`/collection?${queryParams.toString()}`);
  };

  useEffect(() => {
    const { page: urlPage, search: urlSearch } = router.query;
    setPage(Number(urlPage) || 1);
    setSearchTerm(urlSearch as string || '');
  }, [router.query]);
  
  return (
    <>
      <Header searchTerm={searchTerm || ''} setSearchTerm={handleSearch} />
      
      <Container sx={{ marginTop: 14}}>
        <Stack direction="row" sx={{alignItems: 'baseline'}} justifyContent="space-between">
          <Typography variant="h2" sx={{ marginBottom: 4}}>
            Search The Collection
          </Typography>

          <Typography variant="h6" sx={{ marginBottom: 4}}>
            {museumObjects?.total.toLocaleString()} results {searchTerm && searchTerm != '' ? `for ${searchTerm}` : ''}
          </Typography>
        </Stack>

        <Filters />
        <ObjectList objects={museumObjectsData}/> 
        
        <Container 
          sx={{ 
            marginY: 6,
            display: 'flex',
            justifyContent: 'center',
          }}>

          <Pagination 
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            size="small" 
            showFirstButton 
            showLastButton 
          />

        </Container>

      </Container>
    
    </>
  );
}

