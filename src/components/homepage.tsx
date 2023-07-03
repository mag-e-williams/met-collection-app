import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';

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

  useEffect(() => {
    const fetchObjects = async () => {
      const response = await fetchMetData();
      setMuseumObjects(response);
    }

    fetchObjects()
  }, []);


  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    // setPage(1);
    // setSearchTerm(term);
    // updateURL(1, term);
  };


  return (
    <>
      <Header searchTerm={'vaccums'} onSearchTerm={handleSearch} />
      
      <Container sx={{ marginTop: 16}}>
        <table>
          <tr>
            {COLS.map(col => {
              return (
                <th key={col.id}>
                  <h5>{col.name}
                  </h5>
                </th>
              )
            })}
          </tr>
        {museumObjects.map((e) => {
          console.log(e)
          return (
          <tr key={e.objectID}>
            {COLS.map(col => {
              return (
                <td key={col.id}>
                  <p>{e[col.id as keyof MetObject]}</p>
                </td>
              )
            })}

          </tr>
        )})}
        </table>
    </Container>
    </>
    
  );
}
