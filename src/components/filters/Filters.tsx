import React from 'react';

import { Checkbox,Chip,Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import { filters, checkboxFilters, FilterCategory } from '@/utils/filters';

import FilterDropdownLayout, { AccordionElem } from './FilterDropdown';
import FilterSelect from './FilterSelect';
import FilterSearch from './FilterSearch';
import FilterChips from './FilterChips';


type FilterContentProps =  {
  selectedFilters: FilterCategory[]; 
  setSelectedFilters: (e: FilterCategory[]) => void;
  handleChecked: (e: FilterCategory) => void;
}

const FilterContent = ({selectedFilters, setSelectedFilters, handleChecked}: FilterContentProps) => {
  return (
    <>
      <Stack direction="row" spacing={1.5} sx={{paddingY:2}}>
        {Object.keys(filters).map(e => (
          <FilterSelect key={e} filterCategory={e} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
        ))}
      </Stack> 

      <Typography variant="h6">
        Show Only:
      </Typography>
      
      <Stack direction="row" spacing={1}>
        {checkboxFilters.filter(e=> e.category == 'checkboxes').map(e => (
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
    </>
  )
}

type FilterProps =  {
  searchTerm: string;
  setSearchTerm: (e: string) => void;

  selectedFilters: FilterCategory[]; 
  setSelectedFilters: (e: FilterCategory[]) => void;
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



  const FILTERS = () => {
    return [
      {
        title: 'Filter By',
        id: 'filter',
        body: <FilterContent selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} handleChecked={handleChecked} />
      }
    ]
  }

  return (
    <Stack sx={{ m: 1, flexGrow: 1 }} spacing={2}>
      <FilterSearch searchTerm={searchTerm || ''} setSearchTerm={setSearchTerm}/>
      
      <Divider />

      <FilterDropdownLayout content={FILTERS()}/>

      <Divider />

      <FilterChips selectedFilters={selectedFilters} deleteChip={deleteChip} />

    </Stack>
  );
}


