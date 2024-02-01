import { Container, Box } from '@mui/material'
import React from 'react'

import '../assets/ReservationSuccess.scss'
import { images } from '../images/index'

const ReservationSuccess = () => {
  return (
    <Container className="ReservationSuccess">
      <Box className="Display">
        <img src={images.successImg} className="MainBox"></img>
        <img src={images.mobileSuccess} className="MobileBox"></img>
      </Box>
    </Container>
  )
}

export default ReservationSuccess
