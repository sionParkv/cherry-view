/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import React, { useState } from 'react'

const TextBox = ({ maxLength }) => {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    if (value.length <= maxLength) {
      setText(value)
    }
  }

  return (
    <Box style={{ width: '100%' }}>
      <textarea
        style={{ padding: '20px', width: '100%' }}
        value={text}
        onChange={handleChange}
        placeholder={`캠페인 진행과정 중 좋은 점이나 싫은 점 혹은 개선사항 등 어떤글도 좋습니다. 자유롭게 작성해주세요.`}
        maxLength={maxLength}
        rows={20} // 텍스트 박스의 행 수를 조정할 수 있습니다.
        cols={55} // 텍스트 박스의 열 수를 조정할 수 있습니다.
      />
      <p style={{ textAlign: 'end' }}>
        {text.length}/{maxLength}
      </p>
    </Box>
  )
}

export default TextBox
