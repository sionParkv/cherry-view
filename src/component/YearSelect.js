import React from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'

// eslint-disable-next-line react/prop-types
const YearSelector = ({ selectedYear, onChange }) => {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index)

  return (
    <FormControl>
      <InputLabel>출생 연도</InputLabel>
      <Select value={selectedYear} label="출생 연도" onChange={onChange}>
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default YearSelector
