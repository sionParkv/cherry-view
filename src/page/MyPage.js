import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Select,
  Typography as T,
  Tab,
  Tabs,
  TextField,
} from '@mui/material'
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
import CreateIcon from '@mui/icons-material/Create'
import CloseIcon from '@mui/icons-material/Close'

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
// 배송지 정보 아이템
const infoBoxesData = [
  {
    title: '코워커웹',
    name: '김상륜',
    options: ['03375', '기본배송지'],
    address: '서울특별시 은평구 진흥로 182 풍안빌딩 4층',
  },
  {
    title: '코워커웹',
    name: '김상륜',
    options: ['03375', '기본배송지'],
    address: '서울특별시 은평구 진흥로 182 풍안빌딩 4층',
  },
  {
    title: '코워커웹',
    name: '김상륜',
    options: ['03375', '기본배송지'],
    address: '서울특별시 은평구 진흥로 182 풍안빌딩 4층',
  },
  {
    title: '코워커웹',
    name: '김상륜',
    options: ['03375', '기본배송지'],
    address: '서울특별시 은평구 진흥로 182 풍안빌딩 4층',
  },
  {
    title: '코워커웹',
    name: '김상륜',
    options: ['03375', '기본배송지'],
    address: '서울특별시 은평구 진흥로 182 풍안빌딩 4층',
  },
  // Add more data objects for each InfoBox
]

// 4개 버튼 컨트롤 스타일
const styles = {
  box: {
    cursor: 'pointer',
    backgroundColor: 'white',
    color: '#c4c4c4',
  },
  orangeBox: {
    backgroundColor: '#ffc032',
    color: 'black',
  },
}

function CustomTabPanel(props) {
  // 얼굴 노출
  const [selectedFace, setSelectedFace] = useState(null)

  const handleFaceClick = (face) => {
    setSelectedFace(face === selectedFace ? null : face)
  }
  // 결혼 여부
  const [selectedMarry, setSelectedMarry] = useState(null)

  const handleMarryClick = (mary) => {
    setSelectedMarry(mary === selectedMarry ? null : mary)
  }
  // 자녀 여부
  const [selectedChild, setSelectedChild] = useState(null)

  const handleChildClick = (child) => {
    setSelectedChild(child === selectedChild ? null : child)
  }

  // 미디어 운영
  const [selectedMedia, setSelectedMedia] = useState(null)

  const handleMediaClick = (meida) => {
    setSelectedMedia(meida === selectedMedia ? null : meida)
  }

  //반려동물
  const [selectedBox, setSelectedBox] = useState(null)

  const handleBoxClick = (boxName) => {
    setSelectedBox(boxName)
  }

  //카메라
  const [selectedCamera, setSelectedCamera] = useState(null)

  const handleCameraClick = (boxName) => {
    setSelectedCamera(boxName)
  }

  // 성별 구분
  const [selectedGender, setSelectedGender] = useState(null)

  const handleGenderClick = (gender) => {
    setSelectedGender(gender === selectedGender ? null : gender)
  }

  const { value, index, ...other } = props
  // 내정보 탭
  const [selectedTab, setSelectedTab] = useState('basic') // 초기 탭 설정

  const tabContents = {
    basic: (
      <Box className="MyInfoContainer">
        <Box className="MyInfoSection" />
        <Box className="Profile">
          <T className="ProfileText">프로필 등록</T>
          <Box className="ProfileBox">
            <Box></Box>
            <Box>이미지 찾기</Box>
          </Box>
        </Box>
        <Box className="MyInfoSection" />
        <Box className="BasicInfo">
          <T className="ProfileText">기본정보</T>
          <Box className="InputBox">
            <Box className="BasicBox">
              <T className="BasicText">이메일</T>
              <TextField></TextField>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">이름</T>
              <TextField></TextField>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">출생연도</T>
              <TextField></TextField>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">성별</T>
              <Box className="Gender">
                <Box
                  onClick={() => handleGenderClick('male')}
                  sx={{
                    backgroundColor:
                      selectedGender === 'male' ? '#ffc032' : 'white',
                    color: selectedGender === 'male' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  남성
                </Box>
                <Box
                  onClick={() => handleGenderClick('female')}
                  sx={{
                    backgroundColor:
                      selectedGender === 'female' ? '#ffc032' : 'white',
                    color: selectedGender === 'female' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  여성
                </Box>
              </Box>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">연락처</T>
              <TextField></TextField>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">활동명</T>
              <TextField></TextField>
            </Box>
          </Box>
        </Box>
        <Box className="MyInfoSection" />
        <Box className="DeliveryBox">
          <T className="ProfileText">배송지 정보</T>
          <Box className="RightBox">
            <Box className="Scroll">
              {infoBoxesData.map((infoBox, index) => (
                <Box key={index} className="DeliveryInfoBox">
                  <Box className="InfoBox">
                    <Box className="InfoTitle">
                      <T>{infoBox.title}</T>
                      <Box className="IcoBox">
                        <CreateIcon />
                        <CloseIcon />
                      </Box>
                    </Box>
                    <T className="Name">{infoBox.name}</T>
                    <Box className="OptionBox">
                      {infoBox.options.map((option, optionIndex) => (
                        <T key={optionIndex}>{option}</T>
                      ))}
                    </Box>
                    <T className="Address">{infoBox.address}</T>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box className="BasicBox">
              <T className="BasicText">배송지 명</T>
              <TextField />
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">수령인</T>
              <TextField />
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">연락처</T>
              <TextField />
            </Box>
            <Box className="AddressBox">
              <T className="BasicText">주소</T>
              <Box className="AnotherBox">
                <Box className="AddressOne">
                  <Box></Box>
                  <Box>우편번호</Box>
                </Box>
                <Box className="AddressTwo"></Box>
                <TextField placeholder="상세주소를 입력해주세요" />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="기본 배송지로 설정"
                  />
                </FormGroup>
                <Button className="SaveButton">저장하기</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    ),
    // 추가정보 탭
    additional: (
      <Box>
        <Box className="AdditionalSection" />
        <Box className="AdditionalBox">
          <T className="ProfileText">추가정보</T>
          <Box className="RightContent">
            <Box className="OneContent">
              <T>피부 타입</T>
              <Select />
            </Box>
            <Box className="OneContent">
              <T>상의 사이즈</T>
              <Select />
            </Box>
            <Box className="OneContent">
              <T>하의 사이즈</T>
              <Select />
            </Box>
            <Box className="OneContent">
              <T>신발 사이즈</T>
              <Select />
            </Box>
            <Box className="OneContent">
              <T>키</T>
              <Select />
            </Box>
            <Box className="OneContent">
              <T>얼굴 노출</T>
              <Box className="TwoContent">
                <Box
                  onClick={() => handleFaceClick('face')}
                  sx={{
                    backgroundColor:
                      selectedFace === 'face' ? '#ffc032' : 'white',
                    color: selectedFace === 'face' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  노출
                </Box>
                <Box
                  onClick={() => handleFaceClick('unface')}
                  sx={{
                    backgroundColor:
                      selectedFace === 'unface' ? '#ffc032' : 'white',
                    color: selectedFace === 'unface' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  비노출
                </Box>
              </Box>
            </Box>
            <Box className="OneContent">
              <T>결혼 여부</T>
              <Box className="TwoContent">
                <Box
                  onClick={() => handleMarryClick('unmarry')}
                  sx={{
                    backgroundColor:
                      selectedMarry === 'unmarry' ? '#ffc032' : 'white',
                    color: selectedMarry === 'unmarry' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  미혼
                </Box>
                <Box
                  onClick={() => handleMarryClick('marry')}
                  sx={{
                    backgroundColor:
                      selectedMarry === 'marry' ? '#ffc032' : 'white',
                    color: selectedMarry === 'marry' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  기혼
                </Box>
              </Box>
            </Box>
            <Box className="OneContent">
              <T>자녀 여부</T>
              <Box className="TwoContent">
                <Box
                  onClick={() => handleChildClick('unchild')}
                  sx={{
                    backgroundColor:
                      selectedChild === 'unchild' ? '#ffc032' : 'white',
                    color: selectedChild === 'unchild' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  없음
                </Box>
                <Box
                  onClick={() => handleChildClick('child')}
                  sx={{
                    backgroundColor:
                      selectedChild === 'child' ? '#ffc032' : 'white',
                    color: selectedChild === 'child' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  있음
                </Box>
              </Box>
            </Box>
            <Box className="OneContent">
              <T>반려동물</T>
              <Box style={styles.container} className="ThreeContent">
                {['없음', '강아지', '고양이', '기타'].map((boxName) => (
                  <Box
                    key={boxName}
                    style={{
                      ...styles.box,
                      ...(selectedBox === boxName ? styles.orangeBox : null),
                    }}
                    onClick={() => handleBoxClick(boxName)}
                  >
                    {boxName}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className="OneContent">
              <T>직업 분류</T>
              <Select />
            </Box>
            <Box className="OneContent">
              <T>카메라</T>
              <Box style={styles.container} className="ThreeContent">
                {['휴대폰', '미러리스', 'DSLR', '기타'].map((boxName) => (
                  <Box
                    key={boxName}
                    style={{
                      ...styles.box,
                      ...(selectedCamera === boxName ? styles.orangeBox : null),
                    }}
                    onClick={() => handleCameraClick(boxName)}
                  >
                    {boxName}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className="OneContent">
              <T>미디어 공동 운영</T>
              <Box className="TwoContent">
                <Box
                  onClick={() => handleMediaClick('media')}
                  sx={{
                    backgroundColor:
                      selectedMedia === 'media' ? '#ffc032' : 'white',
                    color: selectedMedia === 'media' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  없음
                </Box>
                <Box
                  onClick={() => handleMediaClick('unmedia')}
                  sx={{
                    backgroundColor:
                      selectedMedia === 'unmedia' ? '#ffc032' : 'white',
                    color: selectedMedia === 'unmedia' ? '#202020' : '#c4c4c4',
                    cursor: 'pointer',
                  }}
                >
                  있음
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="AdditionalSection" />
        <Box className="AgainContainer">
          <T className="ProfileText">추천 정보</T>
          <Box className="AgainBox">
            <T>추천 정보 다시 설정 </T>
            <ArrowForwardIosIcon />
          </Box>
        </Box>
        <Box className="AdditionalSection" />
        <Box className="ButtonBox">
          <Button>저장하기</Button>
        </Box>
      </Box>
    ),
    password: (
      // 등록한 캠페인에 대한 컨텐츠
      <div>등록한 캠페인 내용</div>
    ),
    login: (
      // 종료된 캠페인에 대한 컨텐츠
      <div>종료된 캠페인 내용</div>
    ),
    media: (
      // 등록 콘텐츠에 대한 컨텐츠
      <div>등록 콘텐츠 내용</div>
    ),
    panulty: (
      // 등록 콘텐츠에 대한 컨텐츠
      <div>등록 콘텐츠 내용??</div>
    ),
  }

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
      {value === 2 && (
        <Box>
          <Box className="CampaignList">
            <Box
              className={`tab ${
                selectedTab === 'basic' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('basic')}
            >
              기본 정보
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'additional' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('additional')}
            >
              추가 정보
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'password' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('password')}
            >
              비밀번호 변경
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'login' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('login')}
            >
              간편 로그인
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'media' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('media')}
            >
              미디어 연결
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'panulty' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('panulty')}
            >
              패널티
            </Box>
          </Box>
          {tabContents[selectedTab]}
        </Box>
      )}
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
