import { Box, Button, Container, Typography as T } from '@mui/material'
import React from 'react'

import { components } from '../component/index'
import '../assets/SubmitID.scss'
import { useNavigate } from 'react-router-dom'

const SubmitID = () => {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <Container className="SubmitID">
      <components.Header />
      <Box className="BasicBox">
        {' '}
        <Box className="SearchBox">
          <T>아이디 찾기</T>
          <T>회원가입시 등록한 정보로 찾을 수 있습니다.</T>
          <Box />
          <T>{} 회원님의 아이디는 </T>
          <Box className="InfoBox">
            <T className="Info">{}</T>
            <T className="Text">입니다</T>
          </Box>
          <Button onClick={goToLogin} className="LoginButton">
            로그인 하기
          </Button>
          <T className="FindPass">비밀번호 찾기</T>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default SubmitID
