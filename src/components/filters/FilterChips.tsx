import { FilterCategory } from "@/utils/filters";
import { Chip, Stack } from "@mui/material";

export type FilterChipProps = {
  selectedFilters: FilterCategory[], 
  deleteChip: (e: FilterCategory) => void,
}

export default function FilterChips({selectedFilters, deleteChip}: FilterChipProps) {
  if (!selectedFilters.length) return null

  return (
    <Stack direction="row" spacing={1.5}>
      {selectedFilters.map(e =>(
        <Chip key={e.title} label={e.title} onDelete={() => deleteChip(e)} />
      ))}
    </Stack> 
  )
}