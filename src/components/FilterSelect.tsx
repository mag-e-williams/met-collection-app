import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { filters } from '@/utils/filters';

type FilterSelectProps = {
  filterCategory: string
}

export default function FilterSelect({filterCategory}: FilterSelectProps) {
  return (
    <Autocomplete
      fullWidth
      multiple
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


