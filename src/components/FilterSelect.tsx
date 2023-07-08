import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { filters } from '@/utils/filters';
import type { FilterCategory } from '@/utils/filters';

type FilterSelectProps = {
  filterCategory: string,
  selectedFilters: {[key: string]: string[]},
  setSelectedFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string[]; }>>
}

export default function FilterSelect({filterCategory, selectedFilters, setSelectedFilters}: FilterSelectProps) {
  const [selected, setSelected] = useState<FilterCategory[]>([]);

  const handleDropdownSelect = (selectedArray: FilterCategory[]) => {
    selectedFilters
    let newSelectedFilters = {...selectedFilters}
    newSelectedFilters[filterCategory] = selectedArray.map(e=> e.title)

    setSelected(selectedArray)
    setSelectedFilters(newSelectedFilters)
  }

  return (
    <Autocomplete
      fullWidth
      multiple
      value={selected}
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


