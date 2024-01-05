/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@mui/material'

const OptionBox = ({ selectedOption, onOptionClick, options }) => {
  const handleOptionClick = (option) => {
    onOptionClick(option === selectedOption ? null : option)
  }

  return (
    <Box>
      {options.map((option, index) => (
        <Box
          key={index}
          onClick={() => handleOptionClick(option)}
          sx={{
            backgroundColor: selectedOption === option ? '#ffc032' : 'white',
            color: selectedOption === option ? '#202020' : '#c4c4c4',
            cursor: 'pointer',
          }}
        >
          {option}
        </Box>
      ))}
    </Box>
  )
}

export default OptionBox
