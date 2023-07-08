import { Button, FormControl, OutlinedInput, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';


type FilterSearchProps = {
  searchTerm: string, 
  setSearchTerm: (e: string) => void ;
}

export default function FilterSearch({searchTerm, setSearchTerm}: FilterSearchProps) {

  const [headerSearchTerm, setHeaderSearchTerm] = useState<string>(searchTerm);
  const [focus, setFocus] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.stopPropagation;
    const term = event.target.value; 
    setHeaderSearchTerm(term)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation;
    setSearchTerm(headerSearchTerm)
  }

  // submit search phrase
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key == 'Enter' && focus) {
        setSearchTerm(headerSearchTerm)
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [headerSearchTerm, focus, setSearchTerm]);


  return (
    <Stack direction="row" spacing={1.5}>
      <FormControl  size="small" fullWidth variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          value={headerSearchTerm}
          onChange={(e) => handleSearchChange(e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </FormControl>

      <Button variant="outlined" startIcon={<SearchIcon />} onClick={(e) => handleClick(e)}>
        Search
      </Button>
    </Stack>
  )
}