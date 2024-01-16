import { Box, Container, Typography as T } from '@mui/material'
import React from 'react'

import { components } from '../component/index'
import '../assets/AlarmPage.scss'

const AlarmPage = () => {
  return (
    <Container className="AlarmContainer">
      <components.Header />
      <Box className="AlarmBox">
        <T className="MainText">알림센터</T>
        <Box className="Section" />
        <Box>
          <components.Pagination />
        </Box>
      </Box>
    </Container>
  )
}

export default AlarmPage
