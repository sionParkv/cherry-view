import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Typography as T,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { components } from '../component/index'
import { images } from '../images/index'
import '../assets/Login.scss'

const Login = () => {
  const [isCheckedFirst, setIsCheckedFirst] = useState(false)

  const handleFirstCheckboxChange = (event) => {
    setIsCheckedFirst(event.target.checked)
  }
  return (
    <Container className="LoginContainer">
      <components.Header />
      <Box className="BasicBox">
        <Box className="LoginBox">
          <Box className="TopBox">
            <T className="Logo">LOGO</T>
            <TextField label="이메일" defaultValue="" />
            <TextField label="비밀번호" defaultValue="" />
            <Box className="SearchBox">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isCheckedFirst}
                      onChange={handleFirstCheckboxChange}
                    />
                  }
                  label="자동로그인"
                  style={{ color: isCheckedFirst ? '#202020' : '#c4c4c4' }}
                />
              </FormGroup>
              <Box className="DetailBox">
                <T>아이디 찾기</T>
                <Box className="Section" />
                <T>비밀번호 찾기</T>
              </Box>
            </Box>
            <Button className="LoginButton">로그인</Button>
            <Box className="TextBox">
              <T>간편 로그인이 필요하신가요?</T>
              <T>SNS 계정 로그인</T>
            </Box>

            <Box className="IcoBox">
              <img src={images.kakaoIco} />
              <img src={images.naverIco} />
              <img src={images.facebookIco} />
              <img src={images.appleIco} />
              <img src={images.googleIco} />
            </Box>
          </Box>
          <Box className="BottomBox">
            <Box className="TextBox">
              <T>체험하고 리뷰하는 경험을 해보세요!</T>
              <T>아직 체리뷰 회원이 아니신가요?</T>
            </Box>
            <Box className="JoinButton">
              <ArrowForwardIcon />
            </Box>
          </Box>
          <Box className="EndText">
            <T>광고주 고객이신가요?</T>
            <T>사업자 회원가입 바로가기</T>
          </Box>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default Login
