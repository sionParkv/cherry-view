import { Box, Container, Typography as T } from '@mui/material'
import React from 'react'

import '../assets/CertifiNumber.scss'
import { images } from '../images/index'
import { components } from '../component/index'

const CertifiNumber = () => {
  return (
    <Container className="CertifiNumber">
      <components.Header />
      <Box className="BasicBox">
        <Box className="CertifiBox">
          <img src={images.logo} className="Logo"></img>
          <T className="Info">인증번호 안내 드립니다.</T>
          <T className="DetailInfo">
            {}님 안녕하세요. 체리뷰 입니다.
            <br />
            요청하신 아이디찾기 인증번호를 안내 드립니다.
            <br />
            아래번호를 인증번호 입력란에 입력해 주세요.
          </T>
          <Box className="NumberBox">
            <T>인증번호 :</T>
            <T></T>
          </Box>
          <T className="EndText">
            Copyright(C) 기프트인포 INC. all rights reserved.
          </T>
        </Box>
        <Box className="MobileBox">
          <img src={images.logo} className="Logo"></img>
          <T className="Info">인증번호 안내 드립니다.</T>
          <T className="DetailInfo">
            {}님 안녕하세요. 체리뷰 입니다.
            <br />
            요청하신 아이디찾기 인증번호를 안내 드립니다.
            <br />
            아래번호를 인증번호 입력란에 입력해 주세요.
          </T>
          <Box className="NumberBox">
            <T>인증번호 :</T>
            <T></T>
          </Box>
          <T className="EndText">
            Copyright(C) 기프트인포 INC. all rights reserved.
          </T>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default CertifiNumber
