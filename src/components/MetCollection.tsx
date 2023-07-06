import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { fetchMetObjects } from '@/api/fetchMetObjects';
import { fetchMetObjectsData } from '@/api/fetchMetObjectsData';

import type { MetObjectsData } from '@/types/MetObjectsData';
import type { MetObjects } from '@/types/MetObjects';

import Header from './Header';
import ObjectTable from './ObjectTable';
import { Container, Pagination, PaginationItem, Typography } from '@mui/material';

const LIMIT = 16;

export default function MetCollection() {
  const router = useRouter();
  const [museumObjects, setMuseumObjects] = useState<MetObjects>();
  const [museumObjectsData, setMuseumObjectsData] = useState<MetObjectsData[]>([]);

  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [totalPages, setTotalPages] = useState<number>();

  useEffect(() => {
    const fetchObjects = async () => {
      const response = await fetchMetObjects(searchTerm);
      setPage(1)
      setMuseumObjects(response)
      setTotalPages(Math.ceil(response.total / LIMIT))
    }

    fetchObjects()
  }, [searchTerm]);

  useEffect(() => {
    const fetchObjectsData = async () => {
      if (museumObjects) {
        const response = await fetchMetObjectsData(museumObjects, page, LIMIT);
        setMuseumObjectsData(response)
      }
    }

    fetchObjectsData()
  }, [museumObjects, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
    event.stopPropagation;
    setPage(selectedPage);
  };
  
  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <Container sx={{ marginTop: 14}}>
        <Typography variant="h2" sx={{ marginBottom: 4}}>
          Collection Catalog
        </Typography>
        <ObjectTable objects={museumObjectsData}/>

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

