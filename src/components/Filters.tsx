import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import { Checkbox,Chip,Divider,FormControl, FormControlLabel, OutlinedInput, Stack } from '@mui/material';
import FilterSelect from './FilterSelect';
import { filters, checkboxFilters, FilterCategory } from '@/utils/filters';
import { Category } from '@mui/icons-material';



const FilterCategories: { [key: string]: string[] } = {
  'checkboxes': [],
  'Object Type / Materials': [],
  'Geographic Location': [],
  'Date / Era': [],
  'Department': [],
}

// need ordered list for chips
const FilterChips: FilterCategory[] = []


export default function Filters() {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string[]}>(FilterCategories);

  function deleteChip(category: string, chip: string) {
    let newSelectedFilters = {...selectedFilters}

    const index = newSelectedFilters[category].indexOf(chip);
    if (index > -1) {
      newSelectedFilters[category].splice(index, 1); 
    } 
    setSelectedFilters(newSelectedFilters)
  }

  const handleChecked = (checkboxFilter: string) => {
    if (selectedFilters['checkboxes'].includes(checkboxFilter)) {
      deleteChip('checkboxes', checkboxFilter)
    } else {
      let newSelectedFilters = {...selectedFilters}
      newSelectedFilters['checkboxes'].push(checkboxFilter)
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
        {Object.keys(filters).map(e => (
          <FilterSelect key={e} filterCategory={e} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
        ))}
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
                checked={selectedFilters['checkboxes'].includes(e.title)} 
                onChange={() => handleChecked(e.title)}
              />
            }
          />
        ))}
      </Stack> 

      <Divider />

      <Stack direction="row" spacing={1.5}>
        {Object.keys(FilterCategories).map(category => (
          <>
          {selectedFilters[category].map(e => (
            <Chip key={e} label={e} onDelete={() => deleteChip(category, e)} />
          ))}
          </>
        ))}

        {FilterChips.map(e => (
          <Chip key={e.title} label={e.title} onDelete={() => deleteChip(e.category, e.title)} />
        ))}
        
      </Stack> 

    </Stack>
  );
}


