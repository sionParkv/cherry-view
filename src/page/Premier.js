import { Box, Container, Typography as T } from '@mui/material'
import React from 'react'

import { components } from '../component/index'
import { images } from '../images/index'
import '../assets/Premier.scss'

const Premier = () => {
  return (
    <Container className="PremierContainer">
      <components.Header />
      <Box className="BasicBox">
        <T className="MainText">PREMIER</T>
        <T className="SubText">
          기존 캠페인에서 한 단계 나아가, 전문성과 영향력이 검증된 회원들을 위한
          캠페인 프로그램입니다.
          <br />
          블로거와 인스타그래머, 네이버 인플루언서까지 다양하게 신청가능한
          PREMIER를 만나보세요.{' '}
        </T>
        <Box>
          <Box>
            <img src={images.premier1} />
            <T>프리미어 전용 캠페인</T>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Premier
