import { Box, Container, Typography as T } from '@mui/material'
import React from 'react'

import '../assets/Footer.scss'

const Footer = () => {
  return (
    <Container className="Footer">
      <Box className="TopInfo">
        <Box className="TopLeft">
          <T>개인정보처리방침</T>
          <Box />
          <T>이용약관</T>
          <Box />
          <T>고객센터</T>
          <Box />
          <T>광고주센터</T>
          <Box />
          <T>상품소개</T>
        </Box>

        <T className="LastText">
          © 2024. 기프트인포 INC. all rights reserved.
        </T>
      </Box>
      <Box className="BottomInfo">
        <Box className="Logo">
          <T>LOGO</T>
          <T>
            서울특별시 은평구 진흥로 182 풍안빌딩 4층 <br></br>
            사업자 등록번호 000-00-00000 | 대표자 000
          </T>
        </Box>
        <Box className="Number">
          <T>고객센터</T>
          <T>1577-0000</T>
          <T>평일 09:00 ~ 18:00</T>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
