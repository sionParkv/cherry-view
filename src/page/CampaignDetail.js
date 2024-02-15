import {
  Box,
  Button,
  Container,
  IconButton,
  Typography as T,
} from '@mui/material'
import React, { Fragment, useState } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps'

import { components } from '../component/index'
import { images } from '../images'
import '../assets/CampaignDetail.scss'
import { useNavigate } from 'react-router-dom'

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

const rightList = [
  '제공 내역',
  '캠페인 미션',
  '캠페인 키워드',
  '링크',
  '신청 정보',
  '추가 안내사항',
]

const missionItem = [
  {
    icon: images.message,
    title: '키워드',
    text: '제목 키워드 : 디오디너리, 저자극, 매트한, 비타민C, 모든피부용\n본문 키워드 : 디오디너리, 저자극, 매트한, 비타민C, 모든피부용',
    subText:
      '· 위 키워드를 콘텐츠에 넣어주세요.\n· 캠페인 미션으로 주어진 키워드를 적용하지 않으면 수정요청이 있을 수 있습니다.',
  },
  {
    icon: images.link,
    title: '링크삽입',
    text: '구매 가능한 쇼핑몰 링크를 넣어주세요\n-https://www.sephora.kr/brands/the-ordinary',
    subText: '· 위 링크를 본문에 넣어주세요.',
  },
  {
    icon: images.text,
    title: '글자 수',
    text: '800자 이상으로 작성해주세요.\n작성 시 본문 키워드를 이용해 자연스러운 문장으로 작성해주세요.',
    subText:
      '· 캠페인 미션으로 주어진 글자 수를 적용하지 않으면 수정요청이 있을 수 있습니다.',
  },
  {
    icon: images.video,
    title: '동영상',
    text: '연출 컷이나 제형을 동영상이나 움짤로 넣어주세요',
    subText:
      '· 캠페인 미션으로 주어진 동영상 요청사항을 적용하지 않으면 수정요청이 있을 수 있습니다.',
  },
  {
    icon: images.picture,
    title: '사진 수',
    text: '연출 컷, 제형 사진, 사용 시 느낌을 상세히 표현해주시고, 제품을 들고 있는 셀카 사진을 넣어주시면 더욱 좋습니다.\n(사진은 최소 5컷 이상)',
    subText:
      '· 위 안내된 사진 갯수를 준수해주세요. 미 이행 시 수정요청이 있을 수 있습니다.',
  },
]

const CampDetail = () => {
  const navermaps = useNavermaps()

  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked)
  }

  const navigate = useNavigate()

  const goToSubmit = () => {
    navigate('/submit')
  }

  return (
    <Container>
      <components.TopButton />
      <components.Header />
      <Box className="DisplayBox">
        <Box className="CampDetail">
          {/* 왼쪽 컨텐츠 */}
          <Box className="LeftContent">
            <Box className="TextBox">
              <T className="CampText">캠페인 정보</T>
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
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
              <Box className="TitleOne">
                <T className="Text">자연을 담은 Coverage Foundation</T>
                <IconButton onClick={handleLikeClick}>
                  {liked ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>
              </Box>

              <Box className="TitleTwo">신청 23/20</Box>
            </Box>
            <T className="SubText">The Orcinary</T>
            <img className="MainImg" src={images.mainImg} />
            <T className="History">제공 내역</T>
            <Box className="HistoryText">
              자연을 담은 Coverage Foundation 본품 1개
              <br />
              <br />
              색상 택 1(1호, 2호) <br />
              ㄴ1호 : 밝은 21호 피부 추천 / 2호 : 21~23호 피부 추천
            </Box>
            <Box className="Map">
              <T className="Schedule">영업시간 및 방문 가능일정</T>
              <Box className="Road">네이버 지도 길찾기</Box>
            </Box>
            <MapDiv className="NaverMap">
              <NaverMap
                defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
                defaultZoom={10}
              >
                <Marker
                  defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
                />
              </NaverMap>
            </MapDiv>
            <Box className="ScheduleText">
              [영업시간] 화~일 17:00~23:30 (L.O 22:30) / 월요일 휴무 <br />
              [인플루언서 방문가능일정] 화~금 17:00~23:30 (L.O 22:30)
              <br /> * 토, 일, 월 방문불가
            </Box>
            <T className="MissionText">캠페인 미션</T>
            <Box className="MissionItem">
              {missionItem.map((item, index) => (
                <Box className="Detail" key={index}>
                  <img src={item.icon} />
                  <T>{item.title}</T>
                </Box>
              ))}
            </Box>
            <Box>
              {missionItem.map((item, index) => (
                <Box key={index} className="MissionItems">
                  <Box className="ItemLogo">
                    <img src={item.icon} alt={`Image ${index}`} />
                    <T>{item.title}</T>
                  </Box>
                  <T gutterBottom>
                    {item.text &&
                      item.text.split('\n').map((text, i) => (
                        <Fragment key={i}>
                          {text}
                          <br />
                        </Fragment>
                      ))}
                  </T>
                  <T>
                    {item.subtext ||
                      item.subText.split('\n').map((text, i) => (
                        <Fragment key={i}>
                          {text}
                          <br />
                        </Fragment>
                      ))}
                  </T>
                </Box>
              ))}
              <Box className="InfoTitle">신청 정보</Box>
              <T className="InfoText">- 사용 카메라 종류 , 블로그 관리인 수</T>
              <Box className="InfoTitle">추가 안내사항</Box>
              <T className="InfoText">
                - 제공받은 제품은 타인에게 양도 및 판매, 교환을 절대 허용하지
                않으며, 적발 시 제품 가격 환불 및 캠페인 참여 제한됩니다.
                <br /> - 콘텐츠 등록 기간 내 콘텐츠 미등록 시 서비스 이용료 및
                제품 가격에 대하여 비용 청구됩니다.
                <br /> - 선정 후 단순 변심에 의한 제공내역 옵션 및 배송지 변경은
                어렵습니다.
                <br /> - 안내된 제공 내역과 다르거나, 별도 공지 없이 7일 이상
                배송되지 않는 등 진행이 어려운 경우 1:1문의로 연락해주세요.
                <br /> - 업체 측 요청에 따라 선정 인플루언서 수가 변경될 수
                있습니다.
                <br /> - 콘텐츠 작성 시 선정 된 본 캠페인의 제품만으로 단독
                촬영하여 진행되어야 합니다.
                <br /> - 작성하신 콘텐츠는 6개월 유지해야 하며, 유지하지 않을
                경우 페널티가 부과됩니다.
                <br /> - 콘텐츠 작성 시 태그 달기 부분에 제공 드린 키워드를 추가
                작성 부탁드립니다.
              </T>
            </Box>
          </Box>
          {/* 오른쪽 컨텐츠 */}
          <Box className="RightContent">
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
            <Box className="Media">
              <T>모집 미디어</T>
              <img src={images.naver}></img>
              <T>네이버 블로그</T>
            </Box>
            <Box className="ListBox">
              {rightList.map((item, index) => (
                <Box className="List" key={index}>
                  {item}
                  <Box className="Section"></Box>
                </Box>
              ))}
            </Box>
            <Button className="CampButton" onClick={goToSubmit}>
              캠페인 신청하기
            </Button>
          </Box>
        </Box>
        {/* 모바일 */}
        <Box className="MobileBox">
          {/* 왼쪽 컨텐츠 */}
          <Box className="LeftContent">
            <Box className="TextBox">
              <T className="CampText">캠페인 정보</T>
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
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
            <Box className="TitleOne">
              <T className="Text">자연을 담은 Coverage Foundation</T>
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite color="error" /> : <FavoriteBorder />}
              </IconButton>
            </Box>
            <T className="SubText">The Orcinary</T>

            <Box className="TitleTwo">신청 23/20</Box>
            <img className="MainImg" src={images.mainImg} />
            <Box className="Section" />
            <T className="History">제공 내역</T>
            <Box className="HistoryText">
              자연을 담은 Coverage Foundation 본품 1개
              <br />
              <br />
              색상 택 1(1호, 2호) <br />
              ㄴ1호 : 밝은 21호 피부 추천 / 2호 : 21~23호 피부 추천
            </Box>
            <T className="Schedule">영업시간 및 방문 가능일정</T>
            <Box className="Road">네이버 지도 길찾기</Box>
            <MapDiv className="NaverMap">
              <NaverMap
                defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
                defaultZoom={10}
              >
                <Marker
                  defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
                />
              </NaverMap>
            </MapDiv>
            <Box className="ScheduleText">
              [영업시간] 화~일 17:00~23:30 (L.O 22:30) / 월요일 휴무 <br />
              [인플루언서 방문가능일정] 화~금 17:00~23:30 (L.O 22:30)
              <br /> * 토, 일, 월 방문불가
            </Box>
            <T className="MissionText">캠페인 미션</T>
            <Box className="MissionItem">
              {missionItem.map((item, index) => (
                <Box className="Detail" key={index}>
                  <img src={item.icon} />
                  <T>{item.title}</T>
                </Box>
              ))}
            </Box>
            <Box>
              {missionItem.map((item, index) => (
                <Box key={index} className="MissionItems">
                  <Box className="ItemLogo">
                    <img src={item.icon} alt={`Image ${index}`} />
                    <T>{item.title}</T>
                  </Box>
                  <T gutterBottom>
                    {item.text &&
                      item.text.split('\n').map((text, i) => (
                        <Fragment key={i}>
                          {text}
                          <br />
                        </Fragment>
                      ))}
                  </T>
                  <T>
                    {item.subtext ||
                      item.subText.split('\n').map((text, i) => (
                        <Fragment key={i}>
                          {text}
                          <br />
                        </Fragment>
                      ))}
                  </T>
                </Box>
              ))}
              <Box className="InfoTitle">신청 정보</Box>
              <T className="InfoText">- 사용 카메라 종류 , 블로그 관리인 수</T>
              <Box className="InfoTitle">추가 안내사항</Box>
              <T className="InfoText">
                - 제공받은 제품은 타인에게 양도 및 판매, 교환을 절대 허용하지
                않으며, 적발 시 제품 가격 환불 및 캠페인 참여 제한됩니다.
                <br /> - 콘텐츠 등록 기간 내 콘텐츠 미등록 시 서비스 이용료 및
                제품 가격에 대하여 비용 청구됩니다.
                <br /> - 선정 후 단순 변심에 의한 제공내역 옵션 및 배송지 변경은
                어렵습니다.
                <br /> - 안내된 제공 내역과 다르거나, 별도 공지 없이 7일 이상
                배송되지 않는 등 진행이 어려운 경우 1:1문의로 연락해주세요.
                <br /> - 업체 측 요청에 따라 선정 인플루언서 수가 변경될 수
                있습니다.
                <br /> - 콘텐츠 작성 시 선정 된 본 캠페인의 제품만으로 단독
                촬영하여 진행되어야 합니다.
                <br /> - 작성하신 콘텐츠는 6개월 유지해야 하며, 유지하지 않을
                경우 페널티가 부과됩니다.
                <br /> - 콘텐츠 작성 시 태그 달기 부분에 제공 드린 키워드를 추가
                작성 부탁드립니다.
              </T>
            </Box>
          </Box>
          {/* 오른쪽 컨텐츠 */}
          <Box className="RightContent">
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
            <Box className="Media">
              <T>모집 미디어</T>
              <img src={images.naver}></img>
              <T>네이버 블로그</T>
            </Box>
            <Box className="ListBox">
              {rightList.map((item, index) => (
                <Box className="List" key={index}>
                  {item}
                  <Box className="Section"></Box>
                </Box>
              ))}
            </Box>
            <Button className="CampButton" onClick={goToSubmit}>
              캠페인 신청하기
            </Button>
          </Box>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default CampDetail
