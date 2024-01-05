import { Box } from '@mui/material'
import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'option1', label: '제품 캠페인' },
  { value: 'option2', label: '지역 캠페인' },
  { value: 'option3', label: '기타 서비스' },
]

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: '228px',
    height: '90px',
    border: state.isFocused ? '3px solid #ffc043' : '3px solid #ddd', // 포커스 상태에 따라 border 색상 변경
    borderRadius: '45px', // 커스텀 border-radius 설정
    boxShadow: state.isFocused ? '0 0 0 3px #ffc043' : 'none', // 포커스 시 파란색 테두리 제거
    '&:hover': {
      border: '3px solid #ffc043', // 마우스 호버 시 border 색상 변경
    },
  }),
  menu: (provided) => ({
    ...provided,
    border: '3px solid #ffc043', // 드롭다운 메뉴 border 스타일 설정
    borderRadius: '45px', // 드롭다운 메뉴 border-radius 설정
  }),
  // menuList: (provided) => ({
  //   ...provided,
  //   '& div': {
  //     // 옵션에 대한 스타일
  //     '&:hover': {
  //       background: 'none', // 호버 시 배경색 제거
  //     },
  //   },
  // }),
}

const MainSelect = () => {
  return (
    <Box>
      <Select
        options={options}
        styles={customStyles} // 커스텀 스타일 적용
      />
    </Box>
  )
}

export default MainSelect
