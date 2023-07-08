import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import { Checkbox,FormControl, FormControlLabel, OutlinedInput, Stack } from '@mui/material';
import FilterSelect from './FilterSelect';
import { filters, checkboxFilters } from '@/utils/filters';


export default function Filters() {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <Stack sx={{ m: 1, flexGrow: 1 }} spacing={2}>
      <Stack direction="row">
        <FormControl  size="small" fullWidth variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
      </Stack>

      <Typography>
        Filter By
      </Typography>
      
      <Stack direction="row" spacing={2}>
        {Object.keys(filters).map(e => (
          <FilterSelect key={e} filterCategory={e}/>
        ))}
      </Stack> 

      <Typography>
        Show Only
      </Typography>
      
      <Stack direction="row" spacing={2}>
        {checkboxFilters.map(e => (
          <FormControlLabel 
            key={e.title} 
            label={e.title}
            control={
              <Checkbox defaultChecked />
            }
          />
        ))}
      </Stack> 
    </Stack>
  );
}


function MetDropdownFilter() {
  throw new Error('Function not implemented.');
}

