import { Box, Button, Container, Typography as T } from '@mui/material'
import React from 'react'

import { components } from '../component/index'
import '../assets/ChangePass.scss'
import { useNavigate } from 'react-router-dom'

const ChangePass = () => {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }
  const goToID = () => {
    navigate('/searchid')
  }

  return (
    <Container className="ChangePass">
      <components.Header />
      <Box className="BasicBox">
        <Box className="SearchBox">
          <T className="One">비밀번호 찾기</T>
          <T className="Two">회원가입시 등록한 정보로 찾을 수 있습니다.</T>
          <Box className="Section" />
          <Box className="InfoBox">
            <T>비밀번호</T>
            <T>가 변경 되었습니다.</T>
          </Box>
          <T className="Text"> 새로운 비밀번호로 로그인해주세요 </T>

          <Button onClick={goToLogin} className="LoginButton">
            로그인 하기
          </Button>
          <T className="FindID" onClick={goToID}>
            아이디 찾기
          </T>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default ChangePass
