import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography as T,
  Container,
} from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import ListRoundedIcon from '@mui/icons-material/ListRounded'
import { useNavigate } from 'react-router-dom'

import '../assets/Header.scss'

const Header = () => {
  const navigate = useNavigate()

  const goToCampaign = () => {
    navigate('/campaign')
  }
  const goToNotice = () => {
    navigate('/notice')
  }
  const goToMain = () => {
    navigate('/')
  }
  const goToContents = () => {
    navigate('/submitcontents')
  }
  return (
    <AppBar className="Header">
      <Container>
        <Toolbar disableGutters>
          <Box className="GridContainer">
            {/* Grid 컨테이너 추가 */}
            <Box className="LeftBox">
              {/* 좌측 박스 */}
              <T className="Logo" onClick={goToMain}>
                LOGO
              </T>
              <Box className="IconMenu">
                <IconButton onClick={goToCampaign}>
                  <ListRoundedIcon />
                </IconButton>
              </Box>
              <Box className="Menu">
                <T onClick={goToContents}>지역 캠페인</T>
                <T>제품 캠페인</T>
                <T>기자단 캠페인</T>
                <T>프리미어</T>
                <T onClick={goToNotice}>공지사항</T>
                <T>FAQ</T>
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
              <Box>
                <IconButton>
                  <LoginRoundedIcon />
                </IconButton>
                <T>로그인</T>
              </Box>
              <Box>
                <IconButton>
                  <PersonAddAltRoundedIcon />
                </IconButton>
                <T>회원가입</T>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
