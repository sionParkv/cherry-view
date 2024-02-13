import {
  Box,
  Button,
  Container,
  Typography as T,
  TextField,
} from '@mui/material'
import React from 'react'

import { components } from '../component/index'
import '../assets/SearchPass.scss'

const SearchPass = () => {
  return (
    <Container className="SearchPass">
      <components.Header />
      <Box className="BasicBox">
        <Box className="SearchBox">
          <Box className="TextBox">
            <T>비밀번호 찾기</T>
            <T>비밀번호를 찾으려는 아이디를 입력해주세요.</T>
          </Box>
          <Box className="Section" />
          <TextField label="이메일(아이디)" />
          <TextField
            InputProps={{
              endAdornment: <T className="EndText">인증번호</T>,
            }}
            label="연락처"
          />
          <TextField
            InputProps={{
              endAdornment: <T className="EndText">03:00</T>,
            }}
            label="인증번호"
          />
          <Box className="StatusBox">
            <T>인증이 완료되었습니다.</T>
            <T>인증이 실패하였습니다.</T>
          </Box>

          <Button className="SearchButton">확인</Button>
        </Box>
        <Box className="MobileBox">
          <Box className="TextBox">
            <T>비밀번호 찾기</T>
            <T>비밀번호를 찾으려는 아이디를 입력해주세요.</T>
          </Box>
          <Box className="Section" />
          <TextField label="이메일(아이디)" />
          <TextField
            InputProps={{
              endAdornment: <T className="EndText">인증번호</T>,
            }}
            label="연락처"
          />
          <TextField
            InputProps={{
              endAdornment: <T className="EndText">03:00</T>,
            }}
            label="인증번호"
          />
          <Box className="StatusBox">
            <T>인증이 완료되었습니다.</T>
            <T>인증이 실패하였습니다.</T>
          </Box>

          <Button className="SearchButton">확인</Button>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default SearchPass
