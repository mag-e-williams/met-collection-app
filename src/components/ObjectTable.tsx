import { MetObjectsData } from "@/types/MetObjectsData";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import { Image } from "./utilComponents/Image";
// import { useCurrentImageSizes } from "@/hooks/useCurrentImageSizes";
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
    id: 'objectID', 
    name: 'ID',  
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


type TableImageProps =  {
  image?: string;
};

function TableImage({image}: TableImageProps) {
  if (!image) {
    return null
  }
  return (
    <Image
    src={`${image}?w=400&auto=format`}
    alt={image}
    width={0}
    height={0}
    loading="lazy"
    sizes="100vw"
    style={{
      borderRadius: 4,
      display: 'block',
      width: '60px',
      height: 'auto',
    }}
  />
  )
}

type ObjectTableProps =  {
  objects?: MetObjectsData[];
};

export default function ObjectTable({objects}: ObjectTableProps) {
  if (!objects) {
    return null
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align={'left'}></TableCell>

            {COLS.map(col => (
            <TableCell key={col.id} align={col.align || 'right'}>{col.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {objects.map((row) => (
            <TableRow
              hover
              key={row.objectID}
              sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align={'left'}>
                <TableImage image={row.primaryImage}/>
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