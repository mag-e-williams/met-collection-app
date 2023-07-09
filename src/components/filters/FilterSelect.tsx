import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { filters } from '@/utils/filters';
import type { FilterCategory } from '@/utils/filters';

type FilterSelectProps = {
  filterCategory: string,
  selectedFilters: FilterCategory[],
  setSelectedFilters: (e: FilterCategory[]) => void;
}

export default function FilterSelect({filterCategory, selectedFilters, setSelectedFilters}: FilterSelectProps) {

  const handleDropdownSelect = (selectedArray: FilterCategory[]) => {
    let newSelectedFilters = [...selectedFilters]
    const selected = selectedFilters.filter(e => e.category == filterCategory)

    if (selected.length > selectedArray.length) { // select deletion
      const deletedElems = selected.filter(e => !selectedArray.includes(e))
      deletedElems.forEach(e => {
        const index = newSelectedFilters.indexOf(e);
        if (index > -1) {
          newSelectedFilters.splice(index, 1); 
        } 
      })
    } else { // select addition
      const newElem = selectedArray.slice(-1)[0]
      newSelectedFilters = [...selectedFilters, newElem]
    }
    setSelectedFilters(newSelectedFilters)
  }

  return (
    <Autocomplete
      fullWidth
      multiple
      value={selectedFilters.filter(e => e.category == filterCategory)}
      onChange={(e, value) => handleDropdownSelect(value)}
      id="size-small-outlined-multi"
      size="small"
      options={filters[filterCategory]}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} placeholder={filterCategory} />
      )}
    />
  );
}


