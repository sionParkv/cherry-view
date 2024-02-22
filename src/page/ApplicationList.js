import {
  Box,
  Button,
  Container,
  IconButton,
  Modal,
  Typography as T,
} from '@mui/material'
import React, { useState } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ClearIcon from '@mui/icons-material/Clear'
import StarIcon from '@mui/icons-material/Star'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

import '../assets/ApplicationList.scss'
import { components } from '../component/index'
import { images } from '../images/index'
// 자료
const hashInfo = [
  '제품 캠페인',
  '뷰티',
  '20명 이상 모집',
  '마감임박',
  '산뜻한발림',
  '겨울필수템',
  'The Orcinary',
  'MD추천',
  '친환경 제품',
]
// 인플루언서 아이템
const influencers = [
  { id: 1, name: '인플루언서1', picture: images.userPictuer },
  { id: 2, name: '인플루언서2', picture: images.userPictuer },
  { id: 3, name: '인플루언서2', picture: images.userPictuer },
  { id: 4, name: '인플루언서2', picture: images.userPictuer },
  { id: 5, name: '인플루언서2', picture: images.userPictuer },
]

// 광고주 팝업 아이템
const types = [
  { id: 1, name: '피부타입', type: '아토피' },
  { id: 2, name: '얼굴노출', type: '노출' },
  { id: 3, name: '결혼여부', type: '미혼' },
  { id: 4, name: '자녀여부', type: '없음' },
  { id: 5, name: '반려동물', type: '강아지' },
  { id: 6, name: '직업분류', type: '학생' },
  { id: 7, name: '카메라', type: '휴대폰' },
  { id: 8, name: '미디어 공동 운영', type: '1명 (본인)' },
]

const ApplicationList = () => {
  // 좋아요
  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked)
  }
  // 즐겨찾기
  const [liked2, setLiked2] = useState(false)

  const handleLikeClick2 = () => {
    setLiked2((prevLiked) => !prevLiked)
  }
  // 팝업
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Container className="ApplicationList">
      <components.Header />
      <Box className="Display">
        <Box className="ListBox">
          <Box className="LeftBox">
            <Box className="TextBox">
              <T className="CampText">캠페인 정보</T>
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
              <Box></Box>
            </Box>
            <Box className="HashBox">
              {hashInfo.map((item, index) => (
                <Box className="HashInfo" key={index}>
                  # {item}
                </Box>
              ))}
            </Box>
            <Box className="Section" />
            {/* 상품 정보 */}
            <Box className="TitleBox">
              <Box className="TitleLeft">
                <T className="Text">자연을 담은 Coverage Foundation</T>
                <IconButton onClick={handleLikeClick}>
                  {liked ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>
              </Box>

              <Box className="TitleRight">
                <T>캠페인정보</T>
                <ArrowForwardIosIcon />
              </Box>
            </Box>
            <T className="SubText">The Orcinary</T>
            <Box className="UserContainer">
              {influencers.map((influencer) => (
                <Box
                  onClick={handleOpen}
                  key={influencer.id}
                  className="UserBox"
                >
                  <img src={influencer.picture} alt={influencer.name} />
                  <T>{influencer.name}</T>
                  <ArrowForwardIosIcon />
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="RightBox">
            <img className="MainImg" src={images.mainImg} />
            <Box className="First">
              캠페인 신청기간 &nbsp;&nbsp;11.27 ~ 12.12
            </Box>
            <Box className="Second">
              캠페인 신청기간 &nbsp;&nbsp;11.27 ~ 12.12
            </Box>
            <Box className="Third">인플루언서 발표 &nbsp;&nbsp;12.13</Box>
            <Box className="Third">
              콘텐츠 등록기간 &nbsp;&nbsp;12.14 ~ 12.24
            </Box>
            <Box className="Third">캠페인 결과발표 &nbsp;&nbsp;12.29</Box>
            <Box className="Section" />
            <Box className="Media">
              <T>모집 미디어</T>
              <img src={images.naver}></img>
              <T>네이버 블로그</T>
            </Box>
            <Button className="AppliButton">캠페인 신청하기</Button>
            {/* 캠페인 신청 후 */}
            {/* <Box className="AfterBox">
              캠페인에 신청하셨습니다.
              <br />
              인플루언서 선정 발표일을 기다려주세요.
            </Box>
            <Box className="AfterButtonBox">
              <Button className="Cancle">신청취소</Button>
              <Button className="View">내 신청 보기</Button>
            </Box> */}
            {/* 발표 후 */}
            {/* <Box className="AfterBox">
              인플루언서로 선정되지 않았습니다. <br />
              다른 캠페인에서 활약을 기대할게요! 😊
            </Box>
            <Button className="ViewButton">내 신청 보기</Button> */}
          </Box>
        </Box>
        <Box className="MobileBox">
          <Box className="LeftBox">
            <Box className="TextBox">
              <T className="CampText">캠페인 정보</T>
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
              <Box></Box>
            </Box>
            <Box className="HashBox">
              {hashInfo.map((item, index) => (
                <Box className="HashInfo" key={index}>
                  # {item}
                </Box>
              ))}
            </Box>
            <Box className="Section" />
            {/* 상품 정보 */}
            <Box className="TitleLeft">
              <T className="Text">자연을 담은 Coverage Foundation</T>
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite color="error" /> : <FavoriteBorder />}
              </IconButton>
            </Box>
            <T className="SubText">The Orcinary</T>

            <Box className="TitleRight">
              <T>캠페인정보</T>
              <ArrowForwardIosIcon />
            </Box>
            <Box className="UserContainer">
              {influencers.map((influencer) => (
                <Box
                  onClick={handleOpen}
                  key={influencer.id}
                  className="UserBox"
                >
                  <img src={influencer.picture} alt={influencer.name} />
                  <T>{influencer.name}</T>
                  <ArrowForwardIosIcon />
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="RightBox">
            <img className="MainImg" src={images.mainImg} />
            <Box className="First">
              캠페인 신청기간 &nbsp;&nbsp;11.27 ~ 12.12
            </Box>
            <Box className="Second">
              캠페인 신청기간 &nbsp;&nbsp;11.27 ~ 12.12
            </Box>
            <Box className="Third">인플루언서 발표 &nbsp;&nbsp;12.13</Box>
            <Box className="Third">
              콘텐츠 등록기간 &nbsp;&nbsp;12.14 ~ 12.24
            </Box>
            <Box className="Third">캠페인 결과발표 &nbsp;&nbsp;12.29</Box>
            <Box className="Section" />
            <Box className="Media">
              <T>모집 미디어</T>
              <img src={images.naver}></img>
              <T>네이버 블로그</T>
            </Box>
            <Button className="AppliButton">캠페인 신청하기</Button>
            {/* 캠페인 신청 후 */}
            {/* <Box className="AfterBox">
              캠페인에 신청하셨습니다.
              <br />
              인플루언서 선정 발표일을 기다려주세요.
            </Box>
            <Box className="AfterButtonBox">
              <Button className="Cancle">신청취소</Button>
              <Button className="View">내 신청 보기</Button>
            </Box> */}
            {/* 발표 후 */}
            {/* <Box className="AfterBox">
              인플루언서로 선정되지 않았습니다. <br />
              다른 캠페인에서 활약을 기대할게요! 😊
            </Box>
            <Button className="ViewButton">내 신청 보기</Button> */}
          </Box>
        </Box>
      </Box>
      <components.Footer />
      <Modal open={open} onClose={handleClose}>
        <Box
          className="OwnerModal"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '2rem',
          }}
        >
          <Box className="TopBox">
            <IconButton className="StarIcon" onClick={handleLikeClick2}>
              {liked2 ? (
                <StarIcon className="Star" />
              ) : (
                <StarBorderOutlinedIcon />
              )}
            </IconButton>
            <IconButton onClick={handleClose} className="XIcon">
              <ClearIcon />
            </IconButton>
          </Box>
          <img className="MainImg" src={images.userPictuer} />
          <T className="MainText">인플루언서 명</T>
          <img className="SnsImg" src={images.naver} />
          <Box className="UserInfo">
            <Box className="Info">
              <T>김체리</T>
              <T>이름</T>
            </Box>
            <Box className="Info">
              <T>여</T>
              <T>성별</T>
            </Box>
            <Box className="Info">
              <T>2000</T>
              <T>출생연도</T>
            </Box>
          </Box>
          <Box className="MoreInfo">
            <T>추가정보</T>
            <T>
              스킨케어 리뷰를 전문적으로 많이 해보셨는지 기재해주세요.
              <br />
              <br />
              답변 예시 : 스킨케어 리뷰 0건의 경험이 있습니다.
            </T>
            <T>스킨케어 리뷰 0건의 경험이 있습니다.</T>
          </Box>
          <Box className="TypeBox">
            {types.map((item, index) => (
              <Box className="Type" key={index}>
                <T>{item.name}</T>
                <T>{item.type}</T>
              </Box>
            ))}
          </Box>
          <Box className="PanultyBox">
            <T className="MainText">패널티</T>
            <T className="Date">2023.12.13</T>
            <Box className="PanultyInfo">
              <T>수제한방 모란꽃차 캠페인 선정 후 미 참여</T>
              <T>패널티 1</T>
            </Box>
          </Box>
          <Button className="UploadButton">업로드 컨텐츠</Button>
        </Box>
      </Modal>
      {/* 사용자 팝업 */}
      {/* <Modal>
        <Box
          className="UserModal"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '2rem',
          }}
        >
          <Box className="IconBox">
            <IconButton className="XIcon">
              <ClearIcon />
            </IconButton>
          </Box>
          <img className="MainImg" src={images.userPictuer} />
          <T className="MainText">인플루언서 명</T>
          <img className="SnsImg" src={images.naver} />
          <Button className="UploadButton">업로드 컨텐츠</Button>
        </Box>
      </Modal> */}
    </Container>
  )
}

export default ApplicationList
