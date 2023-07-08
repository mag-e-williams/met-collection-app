import React from 'react';

import { Checkbox,Chip,Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import { filters, checkboxFilters, FilterCategory } from '@/utils/filters';

import FilterSelect from './FilterSelect';
import FilterSearch from './FilterSearch';

type FilterProps =  {
  searchTerm: string;
  setSearchTerm: (e: string) => void;

  selectedFilters: FilterCategory[]; 
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterCategory[]>>;
}


export default function Filters({searchTerm, setSearchTerm, selectedFilters, setSelectedFilters}: FilterProps) {

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
      <FilterSearch searchTerm={searchTerm || ''} setSearchTerm={setSearchTerm}/>

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


