import React, { useEffect, useState } from 'react';

import Header from '@/components/Header';
import { useRouter } from 'next/router'
import { MetObjectsData } from '@/types/MetObjectsData';
import { fetchMetObjectsData } from '@/api/server/fetchMetObjectsData';
import { Container, Stack, Typography } from '@mui/material';

export default function Collection() {
  const router = useRouter()
  const [objectID, setObjectId] = useState<string>(router.query.objectID as string);
  const [objectData, setObjectData] = useState<MetObjectsData>();

  const [searchTerm, setSearchTerm] = useState<string>('');
  
  useEffect(() => {
    const fetchObjectData = async () => {
      if (objectID) {
        const response = await fetchMetObjectsData([Number(objectID)]);
        setObjectData(response[0])
      }
    }

    fetchObjectData()
  }, [objectID]);

  return (
    <>
      <Header/>

      <Container sx={{ marginTop: 14}}>
        <Stack direction="row" sx={{alignItems: 'baseline'}} justifyContent="space-between">
          <Typography variant="h2" sx={{ marginBottom: 4}}>
            {objectData?.title}
          </Typography>

          <Typography variant="h6" sx={{ marginBottom: 4}}>
            
          </Typography>
        </Stack>
      </Container>
    </>
  );
}

