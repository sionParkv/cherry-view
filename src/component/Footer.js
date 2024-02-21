import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Typography as T,
} from '@mui/material'
import React, { useState } from 'react'
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import '../assets/Footer.scss'
import { images } from '../images/index'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const goToMy = () => {
    navigate('/mypage')
  }

  const goToHome = () => {
    navigate('/')
  }

  const goToCampaign = () => {
    navigate('/campaign')
  }

  const [value, setValue] = useState(0)
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
          <img src={images.logo} />
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
      <Box className="MobileBox">
        <Box className="TopInfo">
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
        <Box className="BottomInfoBox">
          <img src={images.logo} />
          <T className="TextOne">
            서울특별시 은평구 진흥로 182 풍안빌딩 4층
            <br />
            사업자 등록번호 000-00-00000 | 대표자 000
          </T>
          <T className="TextTwo">
            © 2024. 기프트인포 INC. all rights reserved.
          </T>
          <Box className="Section" />
          <T className="TextThree">고객센터</T>
          <T className="TextFour">1577-0000</T>
          <T className="TextFive">평일 09:00 ~ 18:00</T>
        </Box>
      </Box>
      <Box className="MobileFooter" sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label="메뉴" icon={<MenuOutlinedIcon />} />
          <BottomNavigationAction
            onClick={goToCampaign}
            label="캠페인"
            icon={<CollectionsBookmarkOutlinedIcon />}
          />
          <BottomNavigationAction
            onClick={goToHome}
            label="홈"
            icon={<HomeOutlinedIcon />}
          />
          <BottomNavigationAction
            label="찜"
            icon={<FavoriteBorderOutlinedIcon />}
          />
          <BottomNavigationAction
            onClick={goToMy}
            label="마이"
            icon={<PersonOutlineOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  )
}

export default Footer
