import React, { useState } from 'react';
import { MetObjectsData } from "@/types/MetObjectsData";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRouter } from 'next/router';

import Image from "next/image";

type ColumnType = {
  id: string,
  name: string,
  align?: 'right' | 'left'
}
  
const COLS: ColumnType[] = [
  {
    id: 'title', 
    name: 'Title',  
    align: 'left'
  },
  {
    id: 'objectDate', 
    name: 'Date'  
  },
  {
    id: 'department', 
    name: 'Department'  
  },
  {
    id: 'artistDisplayName', 
    name: 'Artist'  
  },

]

type TableThumbnailProps =  {
  image?: string;
};

function TableThumbnail({image}: TableThumbnailProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  if (!image) {
    return null
  }
  return (
    <Image
      onLoad={() => setLoaded(true)} 
      src={`${image}?auto=format`}
      alt={image}
      width={0}
      height={0}
      loading="lazy"
      sizes="100vw"
      style={{
        borderRadius: 4,
        display: 'block',
        width: '100%',
        height: 'auto',
    }}/>
  )
}

type ObjectTableProps =  {
  objects?: MetObjectsData[];
};

export default function ObjectTable({objects}: ObjectTableProps) {
  const router = useRouter();

  if (!objects) {
    return null
  }

  const handleRowClick = (objectID: Number) => {
    router.push(`/collection/${objectID}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align={'left'}></TableCell>
            {COLS.map(col => (
              <TableCell key={col.id} align={col.align || 'right'} sx={{ fontWeight: 750 }}>{col.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {objects.map((row) => (
            <TableRow
              hover
              key={row.objectID}
              onClick={() => handleRowClick(row.objectID)}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 }, 
                '&:hover': { cursor: 'pointer' } 
              }}>
              <TableCell align={'left'} sx={{width: '50px'}}>
                <TableThumbnail image={row.primaryImageSmall}/>
              </TableCell>

              {COLS.map(col => (
                <TableCell 
                  key={col.id} 
                  align={col.align || 'right'} 
                  component="th" 
                  scope="row"
                  >
                  {row[col.id as keyof MetObjectsData]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}