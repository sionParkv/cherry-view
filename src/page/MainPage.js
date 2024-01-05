import * as React from 'react'

import { components } from '../component/index'
import { Container } from '@mui/material'
import '../assets/common.scss'

const MainPage = () => {
  return (
    <Container>
      <components.TopButton />
      <components.Header />
      <components.MainCarousel />
      <components.Category />
      <components.Footer />
    </Container>
  )
}

export default MainPage
