import { Box, Container, Typography as T, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../assets/MyPage.scss'
import { components } from '../component/index'
import { images } from '../images/index'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MainCard from '../component/Card'

const cardData = [
  {
    id: 1,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.youtube,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 2,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 3,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.insta,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 4,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.youtube,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 5,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
]

function CustomTabPanel(props) {
  const { value, index, ...other } = props
  // 캠페인 탭
  const [selectedTab, setSelectedTab] = useState('applied') // 초기 탭 설정

  // 그리드

  return (
    <Box
      role="tabpanel"
      className="TabPanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === 0 && (
        <Box>
          <Box className="MyTopContent">
            <NotificationsActiveIcon className="AlarmIco" />
            <T className="TopText">오늘! 잊지않으셨죠?</T>
            <T className="BotText">
              오늘 콘텐츠 마감일이에요! 잘 업로드 됐는지 확인해보는게 어떨까요?
            </T>
            <ArrowForwardIcon className="ArrowIco" />
          </Box>
          <Box className="MiddleBox">
            <img className="userPictuer" src={images.userPictuer} />
            <Box className="MiddleBoxContent">
              <Box className="UserNameBox">
                <T className="UserName">인플루언서 명</T>
                <Box className="SnsBox">
                  <img src={images.naver} />
                  <img src={images.youtube} />
                  <img src={images.insta} />
                  <Box className="SnsBoxText">
                    <T>미디어 연결</T>
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
              </Box>
              <T className="Name">김체리</T>
              <Box className="ChangePremier">
                <T>회원 정보 변경</T>
                <Box />
                <T>프리미어</T>
              </Box>

              <Box className="CampaignBox">
                <Box className="Campaign">
                  <img src={images.mypage1} />
                  <Box>
                    <T>신청한 캠페인</T>
                    <T>45</T>
                  </Box>
                </Box>
                <Box className="Campaign">
                  <img src={images.mypage1} />
                  <Box>
                    <T>선정된 캠페인</T>
                    <T>4</T>
                  </Box>
                </Box>
                <Box className="Campaign">
                  <img src={images.mypage3} />
                  <Box>
                    <T>보유 포인트</T>
                    <T>20k</T>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="BottomBox">
            <Box className="MyCampaign">
              <FavoriteIcon />
              <T>나의 관심 캠페인 64</T>
              <T>더보기</T>
            </Box>
            <Box className="CardBox">
              {cardData.map((card) => (
                <Box className="Card" key={card.id}>
                  <MainCard
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    snsImage={card.snsImage}
                    person={card.person}
                    dday={card.dday}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Box className="CampaignList">
            <Box
              className={`tab ${
                selectedTab === 'applied' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('applied')}
            >
              신청한 캠페인 45
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'selected' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('selected')}
            >
              선정된 캠페인 4
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'registered' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('registered')}
            >
              등록한 캠페인 2
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'closed' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('closed')}
            >
              종료된 캠페인 45
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'content' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('content')}
            >
              등록 콘텐츠
            </Box>
          </Box>
        </Box>
      )}
      {value === 2 && <Box></Box>}
      {value === 3 && <Box></Box>}
      {value === 4 && <Box></Box>}
    </Box>
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

const MyPage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Container className="MyPageContainer">
      <components.Header />
      <Box className="MyPageBox">
        <Box className="TabBox">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="마이" {...a11yProps(0)} />
            <Tab label="캠페인" {...a11yProps(1)} />
            <Tab label="내 정보" {...a11yProps(2)} />
            <Tab label="포인트" {...a11yProps(3)} />
            <Tab label="고객센터" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <Box className="Section" />
        <Box className="ContentsBox">
          <CustomTabPanel value={value} index={0}></CustomTabPanel>
          <CustomTabPanel value={value} index={1}></CustomTabPanel>
          <CustomTabPanel value={value} index={2}></CustomTabPanel>
          <CustomTabPanel value={value} index={3}></CustomTabPanel>
          <CustomTabPanel value={value} index={4}></CustomTabPanel>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default MyPage
