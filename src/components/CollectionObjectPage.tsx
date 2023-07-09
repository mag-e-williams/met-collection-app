import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import type { MetObjectsData } from '@/types/MetObjectsData';

import Header from '@/components/Header';
import CollectionList from './CollectionList';
import Filters from '@/components/filters/Filters';

import { Container } from '@mui/material';

import { useData } from '@/api/useData';

const PAGE_SIZE = 40;

export default function CollectionObjectPage() {
  const router = useRouter();

  const { data, error, isValidating } = useData('/api' + router.asPath);

  return (
    <>
      <Header />
      OBJECT DETAILS
      <Container sx={{ marginTop: 14 }}>

      </Container>
    </>
  );
}
