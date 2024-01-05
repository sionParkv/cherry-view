import {
  Box,
  Button,
  Container,
  IconButton,
  Typography as T,
  TextField,
} from '@mui/material'
import React, { Fragment, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

import { components } from '../component/index'
import '../assets/SubmitContents.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TextsmsIcon from '@mui/icons-material/Textsms'
import { images } from '../images'
import { useNavigate } from 'react-router-dom'

const SubmitContents = () => {
  const navigate = useNavigate()

  const goToComplete = () => {
    navigate('/contentscomplete')
  }

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const Type = [
    {
      title: '피부타입',
      subTitle: '아토피',
    },
    {
      title: '얼굴노출',
      subTitle: '노출',
    },
    {
      title: '결혼여부',
      subTitle: '미혼',
    },
    {
      title: '자녀여부',
      subTitle: '없음',
    },
    {
      title: '반려동물',
      subTitle: '강아지',
    },
    {
      title: '직업분류',
      subTitle: '학생',
    },
    {
      title: '카메라',
      subTitle: '휴대폰',
    },
    {
      title: '미디어 공동 운영',
      subTitle: '1명 (본인)',
    },
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
  return (
    <Container className="SubmitContents">
      <components.Header />
      <components.TopButton />
      <Box className="ContentsPage">
        {/* 왼쪽 컨텐츠 */}
        <Box className="LeftContent">
          <Box className="TitleBox">
            <CheckCircleIcon />
            <T>캠페인 미션, 잊지 않으셨죠?</T>
          </Box>
          <Box className="MissionItem">
            {missionItem.map((item, index) => (
              <Box className="Detail" key={index}>
                <img src={item.icon} />
                <T>{item.title}</T>
              </Box>
            ))}
          </Box>
          <Box onClick={handleExpandClick} className="Detail">
            <T variant="body1">자세히 보기</T>
            <IconButton>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          {expanded && (
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
          )}
          <Box>
            <Box className="QuesOne">
              <CheckCircleIcon />
              <T>캠페인 신청 시 응답 리스트에 맞게 작성해주셨어요?</T>
            </Box>
            <T className="TextOne">추가정보</T>
            <T className="TextTwo">
              스킨케어 리뷰를 전문적으로 많이 해보셨는지 기재해주세요.
              <br />
              <br />
              답변 예시 : 스킨케어 리뷰 0건의 경험이 있습니다.
            </T>
            <T className="TextThird">스킨케어 리뷰 0건의 경험이 있습니다.</T>
            <Box className="DetailSection"></Box>
            <Box className="TypeBox">
              {Type.map((item, index) => (
                <Box className="Type" key={index}>
                  <T>{item.title}</T>
                  <T>{item.subTitle}</T>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Box className="QuesTwo">
              <TextsmsIcon />
              <T>콘텐츠 링크를 입력해주세요</T>
            </Box>
            <T className="TextOne">해당 캠페인 콘텐츠를 등록해주세요.</T>
            <TextField label="링크를 작성해주세요" defaultValue="" />
            <T className="TextTwo">
              · 알맞은 링크인지 확인해 주세요. 잘못된 링크를 입력 시 패널티가
              부여될 수 있습니다.
            </T>
          </Box>
        </Box>
        {/* 오른쪽 컨텐츠 */}
        <Box className="RightContent">
          <img className="MainImage" src={images.mainImg} />
          <Box className="First">콘텐츠 등록기간 &nbsp;&nbsp;11.27 ~ 12.12</Box>
          <Box className="Third">캠페인 신청기간 &nbsp;&nbsp;11.27 ~ 12.12</Box>
          <Box className="Third">인플루언서 발표 &nbsp;&nbsp;12.13</Box>
          <Box className="Second">
            콘텐츠 등록기간 &nbsp;&nbsp;12.14 ~ 12.24
          </Box>
          <Box className="Third">캠페인 결과발표 &nbsp;&nbsp;12.29</Box>
          <Box className="Section" />
          <Box className="Media">
            <T>모집 미디어</T>
            <img src={images.naver}></img>
            <T>네이버 블로그</T>
          </Box>
          <Button className="CampButton" onClick={goToComplete}>
            캠페인 신청하기
          </Button>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default SubmitContents
