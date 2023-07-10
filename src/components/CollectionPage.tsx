import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import type { MetObjectsData } from '@/types/MetObjectsData';

import Header from '@/components/Header';
import CollectionList from './CollectionList';
import Filters from '@/components/filters/Filters';

import { Container, Pagination, Stack, Typography } from '@mui/material';
import { FilterCategory } from '@/utils/filters';
import { useData } from '@/api/useData';

const PAGE_SIZE = 40;

export default function CollectionPage() {
  const router = useRouter();
  const [fetchedCollection, setFetchedCollection] = useState<MetObjectsData[]>();
  const [page, setPage] = useState<number>(Number(router.query.page) || 1);
  const [searchTerm, setSearchTerm] = useState<string>(router.query.q as string);
  const [selectedFilters, setSelectedFilters] = useState<FilterCategory[]>([]);
  const [fetchedTotal, setFetchedTotal] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>();

  const { data, error, isValidating } = useData('/api' + router.asPath);

  useEffect(() => {
    if (data && !data.error) {
      const { total, page, limit, response } = data;
      setFetchedCollection(response);
      console.log(Math.ceil(total / limit))
      setTotalPages(Math.ceil(total / limit));
      setFetchedTotal(total);
    }
  }, [data]);

  useEffect(() => {
    if (!isValidating) {
      const { page: urlPage, search: urlSearch } = router.query;
      setSearchTerm(urlSearch as string || '');
      setPage(Number(urlPage) || 1);
    }
  }, [router.query, isValidating]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
    event.stopPropagation();
    setPage(selectedPage);
    updateURL(selectedPage, searchTerm);
  };

  const handleSearch = (e: string) => {
    setPage(1);
    setSearchTerm(e);
    updateURL(1, e);
  };

  const handleFilter = (e: FilterCategory[]) => {
    setPage(1);
    setSelectedFilters(e);
    updateURL(1, searchTerm, e);
  };

  const updateURL = (selectedPage: number, term?: string, filterParams?: FilterCategory[]) => {
    let queryParams = new URLSearchParams();
    if (term) {
      queryParams.append('q', term);
    }
    router.push(`/collection?${queryParams.toString()}`);
  };

  return (
    <Container sx={{marginTop: 12}}>
      <Stack direction="row" sx={{ alignItems: 'baseline' }} justifyContent="space-between">
        <Typography variant="h2" sx={{ marginBottom: 4 }}>
          Search The Collection
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          {fetchedTotal.toLocaleString()} results {searchTerm && searchTerm !== '' ? `for ${searchTerm}` : ''}
        </Typography>
      </Stack>

      <Filters searchTerm={searchTerm || ''} setSearchTerm={handleSearch} selectedFilters={selectedFilters} setSelectedFilters={handleFilter} />

      <CollectionList objects={fetchedCollection} />

      <Container
        sx={{
          marginY: 6,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
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
  );
}
