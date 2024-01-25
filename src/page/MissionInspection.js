import { Box, Container, IconButton, Typography as T } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import RoomIcon from '@mui/icons-material/Room'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'

import '../assets/MissionInspection.scss'
import { components } from '../component/index'
import { images } from '../images/index'

const MissonInspection = () => {
  return (
    <Container className="MissonInspectionContainer">
      <components.Header />
      <Box className="MissonInspectionBox">
        <Box className="MissonInspection">
          <Box className="TopBox">
            <IconButton className="Icon">
              <CheckIcon />
            </IconButton>
            <T className="TopText">
              체험단이 인증한 미션 인증 이미지를 확인해보세요.
            </T>
            <Box className="EndBox">
              <T>컨텐츠 바로가기</T>
              <ArrowForwardIosIcon />
            </Box>
          </Box>
          <Box className="ContentsBox">
            <ReceiptLongIcon />
            <T>영수증 리뷰</T>
          </Box>
          <T className="TextOne">
            구매하신 영수증을 첨부한 리뷰를 인증해주세요.
          </T>
          <T className="TextTwo">
            · 캠페인 미션으로 주어진 영수증리뷰를 적용하지 않으면 수정요청이
            있을 수 있습니다.
          </T>
          <Box className="ImgBox">
            <img src={images.mainImg} />
            <img src={images.mainImg} />
            <img src={images.mainImg} />
            <img src={images.mainImg} />
          </Box>
          <Box className="ContentsBox">
            <RoomIcon />
            <T>장소저장</T>
          </Box>
          <T className="TextOne">
            네이버 지도에서 장소저장을 누르고 스크린샷을 인증해주세요.
          </T>
          <T className="TextTwo">
            · 캠페인 미션으로 주어진 장소저장을 적용하지 않으면 수정요청이 있을
            수 있습니다.
          </T>
          <img className="Imge" src={images.mainImg} />
          <Box className="ContentsBox">
            <NotificationsNoneOutlinedIcon />
            <T>알림설정</T>
          </Box>
          <T className="TextOne">
            네이버 지도에서 장소저장을 누르고 알림설정을 인증해주세요.
          </T>
          <T className="TextTwo">
            · 캠페인 미션으로 주어진 장소저장을 적용하지 않으면 수정요청이 있을
            수 있습니다.
          </T>
          <img className="Imge" src={images.mainImg} />
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default MissonInspection
