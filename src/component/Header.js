import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography as T,
  Container,
  Modal,
  TextField,
} from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import ListRoundedIcon from '@mui/icons-material/ListRounded'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import '../assets/Header.scss'
import { useState } from 'react'
import { images } from '../images'
import { components } from '../component/index'

const imageItem = {
  item1: images.cate1,
  item2: images.cate2,
  item3: images.cate3,
  item4: images.cate4,
  item5: images.cate5,
  item6: images.cate6,
}
const imageItem2 = {
  item1: images.cate7,
  item2: images.cate8,
  item3: images.cate9,
  item4: images.cate10,
  item5: images.cate11,
  item6: images.cate12,
  item7: images.cate13,
  item8: images.cate14,
}
const items = ['식품', '뷰티', '여행', '문화', '생활', '디지털']

const items2 = [
  '반려동물',
  '서비스',
  '유아동',
  '패션',
  '스포츠',
  '프리미어',
  '도서',
  '이용가이드',
]

const Header = () => {
  const navigate = useNavigate()

  const goToNotice = () => {
    navigate('/notice')
  }
  const goToPremier = () => {
    navigate('/premier')
  }
  const goToFAQ = () => {
    navigate('/faq')
  }
  const goToCommunity = () => {
    navigate('/community')
  }
  const goToLogin = () => {
    navigate('/login')
  }
  const goToJoin = () => {
    navigate('/join')
  }
  const goToMain = () => {
    navigate('/')
  }
  const goToArea = () => {
    navigate('/area')
  }
  const goToProduct = () => {
    navigate('/product')
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHambugerBoxOpen, setIsHambugerBoxOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen) // 메뉴를 열거나 닫기 위해 상태를 변경합니다.
    setIsHambugerBoxOpen(!isHambugerBoxOpen)
  }
  return (
    <Box>
      {isMenuOpen ? null : (
        <AppBar className="Header">
          <Container>
            <Toolbar disableGutters>
              <Box className="GridContainer">
                {/* Grid 컨테이너 추가 */}
                <Box className="LeftBox">
                  {/* 좌측 박스 */}
                  <img
                    src={images.logo}
                    className="Logo"
                    onClick={goToMain}
                  ></img>
                  <Box className="IconMenu">
                    <IconButton onClick={handleMenuClick}>
                      <ListRoundedIcon />
                    </IconButton>
                  </Box>
                  <Box className="Menu">
                    <T onClick={goToArea}>지역 캠페인</T>
                    <T onClick={goToProduct}>제품 캠페인</T>
                    <T>기자단 캠페인</T>
                    <T onClick={goToPremier}>프리미어</T>
                    <T onClick={goToNotice}>공지사항</T>
                    <T onClick={goToFAQ}>FAQ</T>
                    <T onClick={goToCommunity}>커뮤니티</T>
                  </Box>
                </Box>
                {/* 우측 로그인 박스 */}
                <Box className="LoginBox">
                  <Box>
                    <IconButton>
                      <SearchRoundedIcon />
                    </IconButton>
                    <T>검색</T>
                  </Box>
                  <Box onClick={goToLogin}>
                    <IconButton>
                      <LoginRoundedIcon />
                    </IconButton>
                    <T>로그인</T>
                  </Box>
                  <Box onClick={goToJoin}>
                    <IconButton>
                      <PersonAddAltRoundedIcon />
                    </IconButton>
                    <T>회원가입</T>
                  </Box>
                </Box>
              </Box>
              <Box className="MobileBox">
                <IconButton>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <img src={images.logo} />
                <Box>
                  <IconButton>
                    <SearchRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <NotificationsNoneOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}

      <Modal open={isHambugerBoxOpen}>
        <Box
          className="MainModal"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f5f5f5',
            padding: '2rem',
          }}
        >
          <Box className="Display">
            <img onClick={handleMenuClick} src={images.logo} />
            <Box className="TopBox">
              <TextField
                InputProps={{
                  endAdornment: (
                    <IconButton className="SearchButton">
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
                placeholder="찾으시는 캠페인이 있으신가요?"
              />
              <Box className="LoginBox">
                <Box>
                  <IconButton>
                    <NotificationsNoneOutlinedIcon />
                  </IconButton>
                  <T>알림</T>
                </Box>
                <Box onClick={goToLogin}>
                  <IconButton>
                    <PersonOutlineOutlinedIcon />
                  </IconButton>
                  <T>마이</T>
                </Box>
                <Box onClick={goToJoin}>
                  <IconButton>
                    <LoginRoundedIcon />
                  </IconButton>
                  <T>로그아웃</T>
                </Box>
              </Box>
            </Box>
            <Box className="MiddleBox">
              <Box className="TextBox">
                <T>지역 캠페인</T>
                <ArrowForwardIosIcon />
              </Box>
              <Box className="SmallCategory">
                {items.map((item, index) => (
                  <Box className="Item" key={index}>
                    {/* 이미지 파일 객체를 가져와 이미지를 렌더링 */}
                    <img src={imageItem[`item${index + 1}`]} alt={item} />
                    <T>{item}</T>
                  </Box>
                ))}
              </Box>
              <Box className="TextBox">
                <T>제품 캠페인</T>
                <ArrowForwardIosIcon />
              </Box>
              <Box className="SmallCategory">
                {items2.map((item, index) => (
                  <Box className="Item" key={index}>
                    {/* 이미지 파일 객체를 가져와 이미지를 렌더링 */}
                    <img src={imageItem2[`item${index + 1}`]} alt={item} />
                    <T>{item}</T>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className="BottomBox">
              <Box className="LeftBox">
                <Box className="Item">
                  <img src={images.mic} />
                  <T>기자단 캠페인</T>
                  <ArrowForwardIosIcon />
                </Box>
                <Box className="Item">
                  <img src={images.premier} />
                  <T>프리미어</T>
                  <ArrowForwardIosIcon />
                </Box>
              </Box>
              <Box className="RightBox">
                <Box className="Item">
                  <T>공지사항</T>
                  <ArrowForwardIosIcon />
                </Box>
                <Box className="Item">
                  <T>FAQ</T>
                  <ArrowForwardIosIcon />
                </Box>
                <Box className="Item">
                  <T>커뮤니티</T>
                  <ArrowForwardIosIcon />
                </Box>
              </Box>
            </Box>
          </Box>
          <components.Footer />
        </Box>
      </Modal>
    </Box>
  )
}
export default Header
