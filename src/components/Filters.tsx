import React, { useState } from 'react';

import { Checkbox,Chip,Divider,FormControl, FormControlLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { filters, checkboxFilters, FilterCategory } from '@/utils/filters';

import FilterSelect from './FilterSelect';

export default function Filters() {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [selectedFilters, setSelectedFilters] = useState<FilterCategory[]>([]);

  function deleteChip(checkedFilter: FilterCategory) {
    let newSelectedFilters = [...selectedFilters]

    const index = newSelectedFilters.indexOf(checkedFilter);
    if (index > -1) {
      newSelectedFilters.splice(index, 1); 
    } 
    setSelectedFilters(newSelectedFilters)
  }

  const handleChecked = (checkedFilter: FilterCategory) => {
    const categoryFilters = selectedFilters.filter(e=>e.category == checkedFilter.category).map(e=>e.title)

    if (categoryFilters.includes(checkedFilter.title)) {
      deleteChip(checkedFilter)
    } else {
      let newSelectedFilters = [...selectedFilters]
      newSelectedFilters.push(checkedFilter)
      setSelectedFilters(newSelectedFilters)
    }
  }
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

      <Stack direction="row" spacing={1.5}>
        {Object.keys(filters).map(e => {
          return (
          <FilterSelect key={e} filterCategory={e} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
          )
        }
        )}
      </Stack> 

      <Typography>
        Show Only
      </Typography>
      
      <Stack direction="row" spacing={1}>
        {checkboxFilters.map(e => (
          <FormControlLabel 
            key={e.title} 
            label={e.title}
            sx={{marginRight: 0}}
            control={
              <Checkbox 
                checked={selectedFilters.filter(e => e.category == 'checkboxes').map(e => e.title).includes(e.title)} 
                onChange={() => handleChecked(e)}
              />
            }
          />
        ))}
      </Stack>  

      <Divider />

      <Stack direction="row" spacing={1.5}>
        {selectedFilters.map(e =>(
          <Chip key={e.title} label={e.title} onDelete={() => deleteChip(e)} />
        ))}
      </Stack> 

    </Stack>
  );
}


