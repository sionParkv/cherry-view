import { Box, Button, Container, Typography as T } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'

import '../assets/CompletedInfluencer.scss'
import { components } from '../component/index'
import { images } from '../images/index'

const CompletedInfluencer = () => {
  return (
    <Container className="CheckInfluencerContainer">
      <components.Header />
      <Box className="CheckInfluencerBox">
        <Box className="CheckInfluencer">
          <T className="MainText">인플루언서 선정 완료</T>
          <Box className="DateBox">
            <T>콘텐츠 등록기간</T>
            <T>12.14 ~ 12.24</T>
          </Box>
          <Box className="MainBox">
            <img className="MainImg" src={images.userPictuer} />
            <CheckIcon className="CheckIcon" />
          </Box>

          <Box className="ImgBox">
            <img src={images.userPictuer} />
            <img src={images.userPictuer} />
            <img src={images.userPictuer} />
          </Box>
          <Box className="ButtonBox">
            <Button className="MainButton">메인으로</Button>
            <Button className="MyButton">마이 페이지</Button>
          </Box>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default CompletedInfluencer
