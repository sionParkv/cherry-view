import {
  Box,
  Button,
  Container,
  Typography as T,
  Tab,
  Tabs,
} from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import PropTypes from 'prop-types'

import '../assets/Suggestion.scss'
import { components } from '../component/index'
import { images } from '../images/index'

const imageItem = {
  item1: images.cate1,
  item2: images.cate2,
  item3: images.cate3,
  item4: images.cate4,
  item5: images.cate5,
  item6: images.cate6,
  item7: images.cate7,
  item8: images.cate8,
  item9: images.cate9,
  item10: images.cate10,
  item11: images.cate11,
  item12: images.cate12,
  item13: images.cate13,
  item14: images.cate14,
}
const items = [
  '식품',
  '뷰티',
  '여행',
  '문화',
  '생활',
  '디지털',
  '반려동물',
  '서비스',
  '유아동',
  '패션',
  '스포츠',
  '프리미어',
  '도서',
  '이용가이드',
]

const FirstScreen = () => (
  <Box>
    <T className="Maintext">
      인플루언서님의
      <br />
      자신있는 분야가 있으신가요?
    </T>
    <T className="SubText">
      · 원하시는 분야를 선택해주시면 관련분야의 캠페인을 추천드립니다!
    </T>
    <Box className="SmallCategory">
      {items.map((item, index) => (
        <Box className="Category" key={index}>
          {/* 이미지 파일 객체를 가져와 이미지를 렌더링 */}
          <img src={imageItem[`item${index + 1}`]} alt={item} />
          <T>{item}</T>
        </Box>
      ))}
    </Box>
  </Box>
)

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <T>{children}</T>
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const areas = [
  '강남/논현',
  '강동/천호',
  '강서/목동',
  '건대/왕십리',
  '관악/신림',
  '교대/사당',
  '노원/강북',
  '명동/이태원',
  '삼성/선릉',
  '송파/잠실',
  '수유/동대문',
  '신촌/이대',
  '압구정/신사',
  '여의도/영등포',
  '종로/대학로',
  '홍대/마포',
]

// 두번째 화면 탭
const TabBox = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="서울" {...a11yProps(0)} />
          <Tab label="경기/인천" {...a11yProps(1)} />
          <Tab label="다른지역" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box className="AreaBox">
          {areas.map((area, index) => (
            <Box className="Area" key={index}>
              {area}
            </Box>
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box className="AreaBox">
          {areas.map((area, index) => (
            <Box className="Area" key={index}>
              {area}
            </Box>
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box className="AreaBox">
          {areas.map((area, index) => (
            <Box className="Area" key={index}>
              {area}
            </Box>
          ))}
        </Box>
      </CustomTabPanel>
    </Box>
  )
}

const SecondScreen = () => (
  <Box>
    <T className="Maintext">
      인플루언서님의 방문 가능한 지역 캠페인!
      <br />
      어디로 추천드릴까요?
    </T>
    <T className="SubText">
      · 활동 범위에 맞게 추천드릴게요! 어느 지역이 좋으신가요?
    </T>
    <TabBox />
  </Box>
)

const ThirdScreen = () => (
  <Box>
    <T className="Maintext">
      인플루언서님은
      <br />
      어떤 미디어의 캠페인이 편하신가요?
    </T>
    <T className="SubText">
      · 블로그, 인스타그램, 유튜브 어떤 미디어가 편하신가요?!
    </T>
    <Box className="SnsBox">
      <Box className="SNS"></Box>
      <Box className="SNS"></Box>
      <Box className="SNS"></Box>
    </Box>
  </Box>
)

const Suggestion = () => {
  const [showFirstScreen, setShowFirstScreen] = useState(true)
  const [showSecondScreen, setShowSecondScreen] = useState(false)
  const [showThirdScreen, setShowThirdScreen] = useState(false)

  const handleNextClick = () => {
    if (showFirstScreen) {
      setShowFirstScreen(false)
      setShowSecondScreen(true)
    } else if (showSecondScreen) {
      setShowSecondScreen(false)
      setShowThirdScreen(true)
    } else {
      // 세 번째 화면 이후의 로직
    }
  }

  return (
    <Container className="SuggestionContainer">
      <components.Header />
      <Box className="SuggestionBox">
        <Box className="Suggestion">
          <Box className="LeftBox">
            {showFirstScreen && <FirstScreen />}
            {showSecondScreen && <SecondScreen />}
            {showThirdScreen && <ThirdScreen />}
            <Box className="ButtonBox">
              <Button className="LaterButton">나중에</Button>

              <Button onClick={handleNextClick} className="NextButton">
                {showThirdScreen ? (
                  <>
                    <T>시작하기</T>
                  </>
                ) : (
                  <>
                    <T>다음</T>
                    <ArrowForwardIosIcon />
                  </>
                )}
              </Button>
            </Box>
          </Box>
          <Box className="RightBox">
            <ThumbUpIcon className="GoodIcon" />
            <T className="SubText">추천 캠페인</T>
            <T className="MainText">
              선호도에 맞춰
              <br />
              캠페인을 추천드립니다.
            </T>
            <Box className="BottomBox">
              <Box className="Bar"></Box>
              <Box className="Circle" />
              <Box className="BottomText">
                <Box className="TextSection">
                  <T style={{ color: showFirstScreen ? 'black' : '#ccc' }}>
                    01. 캠페인 분야
                  </T>
                  <T style={{ color: showFirstScreen ? 'black' : '#ccc' }}>
                    · 자주 찾는 캠페인 분야가 있으신가요?
                  </T>
                </Box>
                <Box className="TextSection">
                  <T style={{ color: showSecondScreen ? 'black' : '#ccc' }}>
                    02. 활동 지역
                  </T>
                  <T style={{ color: showSecondScreen ? 'black' : '#ccc' }}>
                    · 지역 캠페인 진행에 어려움이 없는 지역을 알려주세요!
                  </T>
                </Box>
                <Box className="TextSection">
                  <T style={{ color: showThirdScreen ? 'black' : '#ccc' }}>
                    03. 미디어
                  </T>
                  <T style={{ color: showThirdScreen ? 'black' : '#ccc' }}>
                    · 선호하시는 미디어를 알려주세요!
                  </T>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default Suggestion
