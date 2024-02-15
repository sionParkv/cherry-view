import { Box, Button, Container, Typography as T } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { components } from '../component/index'
import { images } from '../images/index'
import '../assets/SubmitComplete.scss'

const SubmitComplete = () => {
  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/')
  }
  return (
    <Container className="SubmitComplete">
      <components.Header />
      <Box className="Display">
        <Box className="CompleteBox">
          <Box className="CenterBox">
            <T className="MainText">캠페인 신청 완료</T>
            <Box className="Presentation">
              <T>인플루언서 발표</T>
              <T>12.13</T>
            </Box>
            <img src={images.complete} />

            <Box className="MainBox">
              <T>자연을 담은 Coverage Foundation</T>
            </Box>
            <Box className="ButtonBox">
              <Button className="Main" onClick={goToMain}>
                메인으로
              </Button>
              <Button className="List">신청 리스트</Button>
            </Box>
          </Box>
        </Box>
        <Box className="MobileBox">
          <Box className="CenterBox">
            <T className="MainText">캠페인 신청 완료</T>
            <Box className="Presentation">
              <T>인플루언서 발표</T>
              <T>12.13</T>
            </Box>
            <img src={images.complete} />

            <Box className="MainBox">
              <T>자연을 담은 Coverage Foundation</T>
            </Box>
            <Box className="ButtonBox">
              <Button className="Main" onClick={goToMain}>
                메인으로
              </Button>
              <Button className="List">신청 리스트</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default SubmitComplete
