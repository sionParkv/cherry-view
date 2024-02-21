/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  FormControlLabel,
  FormGroup,
  IconButton,
  Pagination,
  Paper,
  Select,
  Stack,
  Switch,
  Typography as T,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MainCard from '../component/Card'
import CreateIcon from '@mui/icons-material/Create'
import CloseIcon from '@mui/icons-material/Close'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import SyncIcon from '@mui/icons-material/Sync'
import { DataGrid } from '@mui/x-data-grid'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import '../assets/MyPage.scss'
import { components } from '../component/index'
import { images } from '../images/index'

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

// 고객센터 아이템
const ExpandableTab = ({ question, status, date, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Box>
      <Box className="CenterContainer">
        <Box className="QuestionBox">
          <T className="Question">{question}</T>
          <Box className="Status">{status}</Box>
          <T className="Date">{date}</T>
          {isExpanded ? (
            <KeyboardArrowUpIcon
              onClick={handleToggle}
              variant="contained"
              color="primary"
            />
          ) : (
            <KeyboardArrowDownIcon
              onClick={handleToggle}
              variant="contained"
              color="primary"
            />
          )}
        </Box>
      </Box>
      <Collapse in={isExpanded} unmountOnExit>
        <T>{answer}</T>
        <T className="Date">{date}</T>
      </Collapse>
    </Box>
  )
}

const FAQList = ({ faqData }) => {
  return (
    <Box>
      {faqData.map((faq, index) => (
        <ExpandableTab key={index} {...faq} />
      ))}
    </Box>
  )
}
// 마이 탭 컨텐츠
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
  // 캠페인 탭
  const [campaignSelectedTab, setCampaignSelectedTab] = useState('applied') // 초기 탭 설정
  // 내정보 탭
  const [selectedTab, setSelectedTab] = useState('basic') // 초기 탭 설정
  // 포인트 탭
  const [selectedPoint, setSelectedPoint] = useState('accumulate') // 초기 탭 설정

  // 스위치 컨트롤
  const [checked1, setChecked1] = useState(false)

  const switchChange1 = () => {
    setChecked1(!checked1)
  }
  const [checked2, setChecked2] = useState(false)

  const switchChange2 = () => {
    setChecked2(!checked2)
  }
  const [checked3, setChecked3] = useState(false)

  const switchChange3 = () => {
    setChecked3(!checked3)
  }
  const [checked4, setChecked4] = useState(false)

  const switchChange4 = () => {
    setChecked4(!checked4)
  }
  const [checked5, setChecked5] = useState(false)

  const switchChange5 = () => {
    setChecked5(!checked5)
  }

  // 적립 내역 테이블
  function createData(id, date, reason, point) {
    return { id, date, reason, point }
  }

  const rows = [
    createData(1, '2023.12.13', '수제한방 모란꽃차 캠페인 참여', '200,000P'),
    createData(2, '2023.12.13', '수제한방 모란꽃차 캠페인 참여', '200,000P'),
    createData(3, '2023.12.13', '수제한방 모란꽃차 캠페인 참여', '200,000P'),
    createData(4, '2023.12.13', '수제한방 모란꽃차 캠페인 참여', '200,000P'),
    createData(5, '2023.12.13', '수제한방 모란꽃차 캠페인 참여', '200,000P'),
  ]
  // 출금 내역 테이블
  function createData2(id, bank, name, amount, info, submit, process) {
    return { id, bank, name, amount, info, submit, process }
  }

  const rows2 = [
    createData2(
      1,
      '신한 000-0000-0000',
      '김체리',
      '200,000원',
      '수제한방 모란꽃차 캠페인 참여',
      '2023.12.16',
      '2023.12.18'
    ),
    createData2(
      2,
      '신한 000-0000-0000',
      '김체리',
      '200,000원',
      '수제한방 모란꽃차 캠페인 참여',
      '2023.12.16',
      '2023.12.18'
    ),
    createData2(
      3,
      '신한 000-0000-0000',
      '김체리',
      '200,000원',
      '수제한방 모란꽃차 캠페인 참여',
      '2023.12.16',
      '2023.12.18'
    ),
    createData2(
      4,
      '신한 000-0000-0000',
      '김체리',
      '200,000원',
      '수제한방 모란꽃차 캠페인 참여',
      '2023.12.16',
      '2023.12.18'
    ),
    createData2(
      5,
      '신한 000-0000-0000',
      '김체리',
      '200,000원',
      '수제한방 모란꽃차 캠페인 참여',
      '2023.12.16',
      '2023.12.18'
    ),
  ]
  // 출금 신청 테이블
  const columns3 = [
    {
      field: 'date',
      headerName: '적립일',
      width: 150,
    },
    {
      field: 'reason',
      headerName: '적립사유',
      width: 580,
    },
    {
      field: 'point',
      headerName: '포인트',
      width: 130,
    },
  ]

  const rows3 = [
    {
      id: 1,
      date: '2023.12.23',
      reason: '수제한방 모란꽃차 캠페인 참여',
      point: '200,000 P',
    },
    {
      id: 2,
      date: '2023.12.23',
      reason: '수제한방 모란꽃차 캠페인 참여',
      point: '200,000 P',
    },
    {
      id: 3,
      date: '2023.12.23',
      reason: '수제한방 모란꽃차 캠페인 참여',
      point: '200,000 P',
    },
    {
      id: 4,
      date: '2023.12.23',
      reason: '수제한방 모란꽃차 캠페인 참여',
      point: '200,000 P',
    },
    {
      id: 5,
      date: '2023.12.23',
      reason: '수제한방 모란꽃차 캠페인 참여',
      point: '200,000 P',
    },
    {
      id: 6,
      date: '2023.12.23',
      reason: '수제한방 모란꽃차 캠페인 참여',
      point: '200,000 P',
    },
    {
      id: 7,
      date: '2023.12.23',
      reason: '수제한방 모란꽃차 캠페인 참여',
      point: '200,000 P',
    },
  ]

  // 고객센터 데이터
  const faqData = [
    {
      question: '출금은 어떻게 신청하나요?',
      status: '답변 전',
      date: '2023.00.00',
      answer: '신청해서 선정됐는데 일정이 어려워져서 큰일이에요..',
    },
    {
      question: '출금은 어떻게 신청하나요?',
      status: '답변 전',
      date: '2023.00.00',
      answer: '신청해서 선정됐는데 일정이 어려워져서 큰일이에요..',
    },
    {
      question: '출금은 어떻게 신청하나요?',
      status: '답변 전',
      date: '2023.00.00',
      answer: '신청해서 선정됐는데 일정이 어려워져서 큰일이에요..',
    },
  ]
  // 신청한 캠페인
  function createData4(id, img, title, tag, sns, person, announce, status) {
    return { id, img, title, tag, sns, person, announce, status }
  }

  const rows4 = [
    createData4(
      1,
      images.tea,
      '수제한방 모란꽃차',
      '#배송 #태그 #수제한방차',
      images.naver,
      '모집 20명',
      '2023.12.23',
      '2023.11.28'
    ),
    createData4(
      2,
      images.tea,
      '수제한방 모란꽃차',
      '#배송 #태그 #수제한방차',
      images.naver,
      '모집 20명',
      '2023.12.23',
      '2023.11.28'
    ),
    createData4(
      3,
      images.tea,
      '수제한방 모란꽃차',
      '#배송 #태그 #수제한방차',
      images.naver,
      '모집 20명',
      '2023.12.23',
      '2023.11.28'
    ),
    createData4(
      4,
      images.tea,
      '수제한방 모란꽃차',
      '#배송 #태그 #수제한방차',
      images.naver,
      '모집 20명',
      '2023.12.23',
      '2023.11.28'
    ),
  ]
  // 선정된 캠페인
  function createData5(
    id,
    img,
    title,
    tag,
    sns,
    person,
    startDate,
    endDate,
    delivery,
    status
  ) {
    return {
      id,
      img,
      title,
      tag,
      sns,
      person,
      startDate,
      endDate,
      delivery,
      status,
    }
  }

  const rows5 = [
    createData5(
      1,
      images.tea,
      '수제한방 모란꽃차',
      '#배송 #태그 #수제한방차',
      images.naver,
      '모집 20명',
      '2023.12.14',
      '2023.12.24',
      '247257861126',
      '2023.11.28'
    ),
    createData5(
      2,
      images.tea,
      '수제한방 모란꽃차',
      '#배송 #태그 #수제한방차',
      images.naver,
      '모집 20명',
      '2023.12.14',
      '2023.12.24',
      '247257861126',
      '2023.11.28'
    ),
    createData5(
      3,
      images.tea,
      '수제한방 모란꽃차',
      '#배송 #태그 #수제한방차',
      images.naver,
      '모집 20명',
      '2023.12.14',
      '2023.12.24',
      '247257861126',
      '2023.11.28'
    ),
    createData5(
      4,
      images.tea,
      '수제한방 모란꽃차',
      '#배송 #태그 #수제한방차',
      images.naver,
      '모집 20명',
      '2023.12.14',
      '2023.12.24',
      '247257861126',
      '2023.11.28'
    ),
  ]

  // 캠페인 탭 컨텐츠
  const campaignContents = {
    // 신청한 캠페인
    applied: (
      <Box className="AppliedContainer">
        <Box className="WebBox">
          <Box className="CampaignSection" />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">캠페인 정보</TableCell>
                  <TableCell align="center">인플루언서 발표</TableCell>
                  <TableCell align="center">상태</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows4.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className="CellBox" component="th" scope="row">
                      <img className="CellBoxImg" src={row.img}></img>
                      <Box className="RightBox">
                        <T className="RowTitle">{row.title}</T>
                        <T className="RowTag">{row.tag}</T>
                        <Box className="BottomContent">
                          <img src={row.sns}></img>
                          <T>{row.person}</T>
                          <T>| 마감임박</T>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{row.announce}</TableCell>
                    <TableCell className="StatusCell" align="center">
                      <Box className="StatusCellBox">
                        <T className="CancleBox">신청 취소</T>
                        {row.status}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={2}>
            <Pagination count={5} />
          </Stack>
        </Box>
        <Box className="MobileBox">
          {rows4.map((row) => (
            <Box className="CampCard" key={row.id}>
              <Box className="CardTop">
                <Box className="DetailTop">
                  <T>신청 일자</T>
                  <T>{row.status}</T>
                </Box>
                <CloseIcon />
              </Box>
              <Box className="CardBottom">
                <Box className="TextBox">
                  <T className="MainText">{row.title}</T>
                  <T className="SubText">{row.tag}</T>
                  <Box className="SnsBox">
                    <img src={row.sns} />
                    <T>{row.person}</T>
                    <T>| 마감임박</T>
                  </Box>
                  <Box className="AnnounceBox">
                    <T>인플루언서 발표</T>
                    <T>{row.announce}</T>
                  </Box>
                </Box>
                <img className="MainImg" src={row.img} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    ),
    // 선정된 캠페인
    selected: (
      <Box className="AppliedContainer">
        <Box className="WebBox">
          <Box className="BannerInfoBox">
            <Box className="BannerRight">
              <T>캠페인 선정을 축하합니다.</T>
              <T>콘텐츠 등록 시 스폰서 배너를 꼭 넣어주세요!</T>
            </Box>
            <Box className="BannerLeft">스폰서 배너 알아보기</Box>
          </Box>
          <Box className="CampaignSection" />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">캠페인 정보</TableCell>
                  <TableCell align="center">콘텐츠 등록기간</TableCell>
                  <TableCell align="center">배송정보</TableCell>
                  <TableCell align="center">상태</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="SelectedTable">
                {rows5.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className="CellBox" component="th" scope="row">
                      <img className="CellBoxImg" src={row.img}></img>
                      <Box className="RightBox">
                        <T className="RowTitle">{row.title}</T>
                        <T className="RowTag">{row.tag}</T>
                        <Box className="BottomContent">
                          <img src={row.sns}></img>
                          <T>{row.person}</T>
                          <T>| 마감임박</T>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell className="Registration" align="center">
                      <T>{row.startDate}</T>
                      <T>~</T>
                      <T>{row.endDate}</T>
                    </TableCell>
                    <TableCell className="DeliveryCell" align="center">
                      <T>롯데택배</T>
                      <T>{row.delivery}</T>
                    </TableCell>
                    <TableCell align="center" className="StatusCell">
                      <Box className="StatusCellBox">
                        <T>스폰서 배너</T>
                        <T>컨텐츠 등록</T>
                        <T>신청일자 {row.status}</T>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={2}>
            <Pagination count={5} />
          </Stack>
        </Box>
        <Box className="MobileBox">
          <Box className="SecondBox">
            <T>캠페인 선정을 축하합니다.</T>
            <T>콘텐츠 등록 시 스폰서 배너를 꼭 넣어주세요!</T>
            <Box>스폰서 배너 알아보기</Box>
          </Box>

          {rows4.map((row) => (
            <Box className="CampCard" key={row.id}>
              <Box className="CardTop">
                <Box className="DetailTop">
                  <T>신청 일자</T>
                  <T>{row.status}</T>
                </Box>
                <CloseIcon />
              </Box>
              <Box className="CardBottom">
                <Box className="TextBox">
                  <T className="MainText">{row.title}</T>
                  <T className="SubText">{row.tag}</T>
                  <Box className="SnsBox">
                    <img src={row.sns} />
                    <T>{row.person}</T>
                    <T>| 마감임박</T>
                  </Box>
                  <Box className="AnnounceBox">
                    <T>인플루언서 발표</T>
                    <T>{row.announce}</T>
                  </Box>
                </Box>
                <img className="MainImg" src={row.img} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    ),
    // 등록한 캠페인
    registered: (
      <Box className="AppliedContainer">
        <Box className="WebBox">
          <Box className="CampaignSection" />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">캠페인 정보</TableCell>
                  <TableCell align="center">캠페인 결과발표</TableCell>
                  <TableCell align="center">상태</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows4.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className="CellBox" component="th" scope="row">
                      <img className="CellBoxImg" src={row.img}></img>
                      <Box className="RightBox">
                        <T className="RowTitle">{row.title}</T>
                        <T className="RowTag">{row.tag}</T>
                        <Box className="BottomContent">
                          <img src={row.sns}></img>
                          <T>{row.person}</T>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{row.announce}</TableCell>
                    <TableCell className="StatusCell" align="center">
                      <Box className="StatusCellBox">
                        <T className="CancleBox">캠페인 평가</T>
                        {row.status}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={2}>
            <Pagination count={5} />
          </Stack>
        </Box>
        <Box></Box>
      </Box>
    ),
    // 종료된 캠페인
    closed: (
      <Box className="AppliedContainer">
        <Box className="WebBox">
          <Box className="CampaignSection" />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">캠페인 정보</TableCell>
                  <TableCell align="center">캠페인 결과발표</TableCell>
                  <TableCell align="center">상태</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows4.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className="CellBox" component="th" scope="row">
                      <img className="CellBoxImg" src={row.img}></img>
                      <Box className="RightBox">
                        <T className="RowTitle">{row.title}</T>
                        <T className="RowTag">{row.tag}</T>
                        <Box className="BottomContent">
                          <img src={row.sns}></img>
                          <T>{row.person}</T>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{row.announce}</TableCell>
                    <TableCell className="StatusCell" align="center">
                      <Box className="StatusCellBox">
                        <T className="EndBox">작성완료</T>
                        {row.status}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={2}>
            <Pagination count={5} />
          </Stack>
        </Box>
      </Box>
    ),
    // 등록 콘텐츠
    content: (
      <Box className="ContentContainer">
        <Box className="WebBox">
          <Box className="CampaignSection" />
          <T className="MainText">등록 콘텐츠 4</T>
          <Box className="CardBox">
            <Box className="Card">
              <img className="MainImg" src={images.tea} />
              <T className="MainImgText">
                {' '}
                겨울철 당기는 피부에도 알맞은 저자극 파운데이션 추천
              </T>
              <T className="MainImgdate">2023.12.20</T>
              <Box className="SubImgBox">
                <img src={images.tea} />
                <T>수제한방 모란꽃차</T>
              </Box>
            </Box>
          </Box>
          <Stack spacing={2}>
            <Pagination count={5} />
          </Stack>
        </Box>
        <Box className="MobileBox">
          <T className="ContentText">등록 콘텐츠 4</T>
          <Box className="ContentCardBox">
            <Box className="ContentCard">
              <img className="MainImg" src={images.tea} />
              <Box>
                <T className="MainImgText">
                  겨울철 당기는 피부에도 알맞은 저자극 파운데이션 추천
                </T>
                <T className="MainImgdate">2023.12.20</T>
                <Box className="SubImgBox">
                  <img src={images.tea} />
                  <T>수제한방 모란꽃차</T>
                </Box>
              </Box>
            </Box>
          </Box>
          <Stack spacing={2}>
            <Pagination count={5} />
          </Stack>
        </Box>
      </Box>
    ),
  }

  // 내정보 탭 컨텐츠
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
    // 비밀번호 변경
    password: (
      <Box>
        <Box className="AdditionalSection"></Box>
        <Box className="PasswordContainer">
          <T className="PasswordText">비밀번호 변경</T>
          <Box className="PasswordBox">
            <Box className="DetailBox">
              <T>현재 비밀번호</T>
              <TextField placeholder="현재 사용중이신 비밀번호를 입력해주세요" />
            </Box>
            <Box className="DetailBox">
              <T>새 비밀번호</T>
              <TextField placeholder="새로 사용하실 비밀번호를 입력해주세요" />
            </Box>
            <Box className="DetailBox">
              <T>새 비밀번호 확인</T>
              <TextField placeholder="새 비밀번호를 한번 더 입력해주세요" />
            </Box>
          </Box>
        </Box>
        <Box className="AdditionalSection"></Box>
        <Box className="ButtonBox">
          <Button>저장하기</Button>
        </Box>
      </Box>
    ),
    // 간편 로그인
    login: (
      <Box className="MaxBox">
        <Box className="AdditionalSection"></Box>
        <Box className="LoginContainer">
          <T className="LoginText">간편 로그인</T>
          <Box className="LogindBox">
            <Box className="DetailBox">
              <T>카카오 로그인</T>
              <Switch
                checked={checked1}
                onChange={switchChange1}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundImage: `url(${
                      checked1 ? images.onKakao : images.offKakao
                    })`,
                    backgroundSize: 'cover',
                  },
                }}
              />
            </Box>
            <Box className="DetailBox">
              <T>네이버 로그인</T>
              <Switch
                checked={checked2}
                onChange={switchChange2}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundImage: `url(${
                      checked2 ? images.onNaver : images.offNaver
                    })`,
                    backgroundSize: 'cover',
                  },
                }}
              />
            </Box>
            <Box className="DetailBox">
              <T>페이스북 로그인</T>
              <Switch
                checked={checked3}
                onChange={switchChange3}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundImage: `url(${
                      checked3 ? images.onFacebook : images.offFacebook
                    })`,
                    backgroundSize: 'cover',
                  },
                }}
              />
            </Box>
            <Box className="DetailBox">
              <T>애플 로그인</T>
              <Switch
                checked={checked4}
                onChange={switchChange4}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundImage: `url(${
                      checked4 ? images.onApple : images.offApple
                    })`,
                    backgroundSize: 'cover',
                  },
                }}
              />
            </Box>
            <Box className="DetailBox">
              <T>구글 로그인</T>
              <Switch
                checked={checked5}
                onChange={switchChange5}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundImage: `url(${
                      checked5 ? images.onGoogle : images.offGoogle
                    })`,
                    backgroundSize: 'cover',
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box className="AdditionalSection"></Box>
      </Box>
    ),
    // 미디어 연결
    media: (
      <Box className="MaxBox">
        <Box className="AdditionalSection" />
        <Box className="MediaContainer">
          <T className="MediaText">미디어</T>
          <Box className="ContentsBoxes">
            <Box className="MediaBox">
              <T className="BigText">미디어 연결</T>
              <Box className="DetailBox">
                <img src={images.naver} />
                <T>블로그를 연결해주세요</T>
                <ArrowForwardIosIcon />
              </Box>
            </Box>
            <Box className="MediaBox">
              <T className="BigText">미디어 연결</T>
              <Box className="DetailBox">
                <img src={images.insta} />
                <T>인스타그램을 연결해주세요</T>
                <ArrowForwardIosIcon />
              </Box>
            </Box>
            <Box className="MediaBox">
              <T className="BigText">미디어 연결</T>
              <Box className="DetailBox">
                <img src={images.youtube} />
                <T>유튜브를 연결해주세요</T>
                <ArrowForwardIosIcon />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="AdditionalSection" />
      </Box>
    ),
    // 패널티
    panulty: (
      <Box className="MaxBox">
        <Box className="AdditionalSection" />
        <Box className="PanultyBox">
          <Box className="BarContainer">
            <Box className="BarBox">
              <Box className="BarSection1">
                <Box className="Circle" />
              </Box>
              <Box className="TextBox">
                <T>패널티1</T>
                <T>경고 단계</T>
              </Box>
            </Box>
            <Box className="BarBox">
              <Box className="BarSection2"></Box>
              <Box className="TextBox">
                <T>패널티2</T>
                <T>일주일 이용제한</T>
              </Box>
            </Box>
            <Box className="BarBox">
              <Box className="BarSection2"></Box>
              <Box className="TextBox">
                <T>패널티3</T>
                <T>15일 이용제한</T>
              </Box>
            </Box>
            <Box className="BarBox">
              <Box className="BarSection2"></Box>
              <Box className="TextBox">
                <T>패널티4</T>
                <T>한달 이용제한</T>
              </Box>
            </Box>
            <Box className="BarBox">
              <Box className="BarSection3"></Box>
              <Box className="TextBox">
                <T>패널티5</T>
                <T>영구 이용제한</T>
              </Box>
            </Box>
          </Box>
          <Box className="PanultyTextBox">
            <Box className="TextBox">
              <T>현재 패널티</T>
              <T>경고 단계</T>
              <T>2023.11.21일 까지 서비스 제한중</T>
            </Box>
            <T className="Text">
              페널티 5회 부여시 계정 영구적으로 캠페인 신청, 포인트 출금,
              커뮤니티 활동 불가
            </T>
          </Box>
          <Box className="TextContainer">
            <Box className="InfoText1">
              <T>발생일</T>
              <T>사유</T>
              <T>단계</T>
            </Box>
            <Box className="InfoText2">
              <T>2023.12.13</T>
              <T>'수제한방 모란꽃차' 캠페인 선정 후 미 참여</T>
              <T>패널티 1</T>
            </Box>
          </Box>
        </Box>
        <Box className="AdditionalSection" />
      </Box>
    ),
  }
  // 포인트 컨텐츠
  const potintContents = {
    // 적립내역
    accumulate: (
      <Box>
        <Box className="AdditionalSection" />
        <Box className="SearchBox">
          <Box className="Year">1년</Box>
          <Box className="Year">1주일</Box>
          <Box className="Year">1개월</Box>
          <Box className="Year">3개월</Box>
          <Box className="CalendarBox">
            <EventAvailableIcon />
            <T>연 - 월 - 일</T>
          </Box>
          <Box className="CalendarSection" />
          <Box className="CalendarBox">
            <EventAvailableIcon />
            <T>연 - 월 - 일</T>
          </Box>
          <Box className="Search">조회하기</Box>
          <IconButton className="SearchButton">
            <SyncIcon />
          </IconButton>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>적립일</TableCell>
                <TableCell>적립 사유</TableCell>
                <TableCell>포인트</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.reason}</TableCell>
                  <TableCell>{row.point}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2}>
          <Pagination count={5} />
        </Stack>
        <Box className="BottomText">
          · 포인트가 10,000원 이상 모이면 출금 신청을 할 수 있습니다.
          <br />
          · 포인트는 한 달에 3번 신청이 가능하며, 신청 마감일 5일 후 지급됩니다.
          (지급일이 공휴일인 경우, 다음 영업일에 지급됩니다.)
          <br />
          · 신청 기간 및 지급일 안내 (1일 ~ 10일, 당월 15일 지급), (11일 ~ 20일,
          당월 25일 지급), (21일 ~ 말일, 익월 5일 지급)
          <br />
          · 출금 금액을 지정하여 신청이 불가하며, 신청 정보와 금액 수정을 원하실
          경우, 앞선 신청을 취소하시고 다시 신청해 주세요.
          <br />
          · 입금계좌의 예금주와 회원 정보의 이름이 동일해야 하며, 실명이어야
          포인트가 지급됩니다.
          <br />· 입금액은 관련 법상 사업소득에 따른 세금 3.3%를 공제하고
          입금되며 입금된 날짜를 기준으로 소득이 발생한 것으로 신고됩니다.
        </Box>
      </Box>
    ),
    withdraw: (
      <Box>
        <Box className="AdditionalSection" />
        <Box className="SearchBox">
          <Box className="Year">1년</Box>
          <Box className="Year">1주일</Box>
          <Box className="Year">1개월</Box>
          <Box className="Year">3개월</Box>
          <Box className="CalendarBox">
            <EventAvailableIcon />
            <T>연 - 월 - 일</T>
          </Box>
          <Box className="CalendarSection" />
          <Box className="CalendarBox">
            <EventAvailableIcon />
            <T>연 - 월 - 일</T>
          </Box>
          <Box className="Search">조회하기</Box>
          <IconButton className="SearchButton">
            <SyncIcon />
          </IconButton>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>계좌 정보</TableCell>
                <TableCell>출금 신청액</TableCell>
                <TableCell>상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className="TableData">
                    <T>{row.bank}</T>
                    <T>{row.name}</T>
                  </TableCell>
                  <TableCell className="TableData">
                    <T>{row.amount}</T>
                    <T> {row.info}</T>
                  </TableCell>
                  <TableCell className="TableData3">
                    <Box className="DataBox">
                      <T>신청</T>
                      <T>{row.submit}</T>
                    </Box>
                    <Box className="DataBox">
                      <T>처리</T>
                      <T>{row.process}</T>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2}>
          <Pagination count={5} />
        </Stack>
        <Box className="BottomText">
          · 포인트가 10,000원 이상 모이면 출금 신청을 할 수 있습니다.
          <br />
          · 포인트는 한 달에 3번 신청이 가능하며, 신청 마감일 5일 후 지급됩니다.
          (지급일이 공휴일인 경우, 다음 영업일에 지급됩니다.)
          <br />
          · 신청 기간 및 지급일 안내 (1일 ~ 10일, 당월 15일 지급), (11일 ~ 20일,
          당월 25일 지급), (21일 ~ 말일, 익월 5일 지급)
          <br />
          · 출금 금액을 지정하여 신청이 불가하며, 신청 정보와 금액 수정을 원하실
          경우, 앞선 신청을 취소하시고 다시 신청해 주세요.
          <br />
          · 입금계좌의 예금주와 회원 정보의 이름이 동일해야 하며, 실명이어야
          포인트가 지급됩니다.
          <br />· 입금액은 관련 법상 사업소득에 따른 세금 3.3%를 공제하고
          입금되며 입금된 날짜를 기준으로 소득이 발생한 것으로 신고됩니다.
        </Box>
      </Box>
    ),
    application: (
      <Box>
        <Box className="AdditionalSection" />
        <Box style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows3} columns={columns3} checkboxSelection />
        </Box>
        <Box className="AdditionalSection" />
        <Box className="withdrawBox">
          <Box className="TextBox">
            <T>출금 요청할 적립 건</T>
            <T>2 건</T>
          </Box>
          <Box className="TextBox">
            <T>예상 처리일</T>
            <T>12월 25일</T>
          </Box>
          <Box className="TextBox">
            <T>출금 신청액</T>
            <T>400,000 원</T>
          </Box>
        </Box>
        <Box className="AdditionalSection" />
        <Box className="WithdrawButton">
          <Button>출금신청</Button>
        </Box>
        <Box className="BottomText">
          · 포인트가 10,000원 이상 모이면 출금 신청을 할 수 있습니다.
          <br />
          · 포인트는 한 달에 3번 신청이 가능하며, 신청 마감일 5일 후 지급됩니다.
          (지급일이 공휴일인 경우, 다음 영업일에 지급됩니다.)
          <br />
          · 신청 기간 및 지급일 안내 (1일 ~ 10일, 당월 15일 지급), (11일 ~ 20일,
          당월 25일 지급), (21일 ~ 말일, 익월 5일 지급)
          <br />
          · 출금 금액을 지정하여 신청이 불가하며, 신청 정보와 금액 수정을 원하실
          경우, 앞선 신청을 취소하시고 다시 신청해 주세요.
          <br />
          · 입금계좌의 예금주와 회원 정보의 이름이 동일해야 하며, 실명이어야
          포인트가 지급됩니다.
          <br />· 입금액은 관련 법상 사업소득에 따른 세금 3.3%를 공제하고
          입금되며 입금된 날짜를 기준으로 소득이 발생한 것으로 신고됩니다.
        </Box>
      </Box>
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
          <Box className="WebBox">
            <Box className="MyTopContent">
              <NotificationsActiveIcon className="AlarmIco" />
              <T className="TopText">오늘! 잊지않으셨죠?</T>
              <T className="BotText">
                오늘 콘텐츠 마감일이에요! 잘 업로드 됐는지 확인해보는게
                어떨까요?
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

          <Box className="MobileBox">
            <Box className="MyTopContent">
              <Box className="TopFirst">
                <NotificationsActiveIcon className="AlarmIco" />
                <T className="TopText">오늘! 잊지않으셨죠?</T>
                <ArrowForwardIcon className="ArrowIco" />
              </Box>
              <T className="BotText">
                오늘 콘텐츠 마감일이에요! 잘 업로드 됐는지 확인해보는게
                어떨까요?
              </T>
            </Box>

            <Box className="MiddleBox">
              <Box className="MiddleTop">
                <img className="userPictuer" src={images.userPictuer} />
                <Box className="UserNameBox">
                  <T className="UserName">인플루언서 명</T>
                  <T className="Name">김체리</T>
                  <Box className="ChangeBox">
                    <T>회원 정보 변경</T>
                    <Box />
                    <T>프리미어</T>
                  </Box>
                </Box>
              </Box>

              <Box className="MiddleBottom">
                <Box className="SnsBox">
                  <img src={images.naver} />
                  <img src={images.youtube} />
                  <img src={images.insta} />
                </Box>
                <Box className="SnsBoxText">
                  <T>미디어 연결</T>
                  <ArrowForwardIosIcon />
                </Box>
              </Box>

              <Box className="CampaignBox">
                <Box className="Campaign">
                  <img src={images.mypage1} />
                  <Box>
                    <T>45</T>
                    <T>신청한 캠페인</T>
                  </Box>
                </Box>
                <Box className="Campaign">
                  <img src={images.mypage1} />
                  <Box>
                    <T>4</T>
                    <T>선정된 캠페인</T>
                  </Box>
                </Box>
                <Box className="Campaign">
                  <img src={images.mypage3} />
                  <Box>
                    <T>20k</T>
                    <T>보유 포인트</T>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="BottomBox">
              <Box className="MyCampaign">
                <FavoriteIcon />
                <T>나의 관심 캠페인 64</T>
                <ArrowForwardIosIcon />
              </Box>
              <Box className="CardBox">
                {cardData.map((card) => (
                  <Box className="Card" key={card.id}>
                    <img src={card.imageSrc} />
                    <T>{card.title}</T>
                    <T>{card.description}</T>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {value === 1 && (
        <Box className="AllContainer">
          <Box className="CampaignList">
            <Box
              className={`tab ${
                campaignSelectedTab === 'applied' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setCampaignSelectedTab('applied')}
            >
              신청한 캠페인 45
            </Box>
            <Box
              className={`tab ${
                campaignSelectedTab === 'selected' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setCampaignSelectedTab('selected')}
            >
              선정된 캠페인 4
            </Box>
            <Box
              className={`tab ${
                campaignSelectedTab === 'registered'
                  ? 'SelectedTab'
                  : 'NoSelect'
              }`}
              onClick={() => setCampaignSelectedTab('registered')}
            >
              등록한 캠페인 2
            </Box>
            <Box
              className={`tab ${
                campaignSelectedTab === 'closed' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setCampaignSelectedTab('closed')}
            >
              종료된 캠페인 45
            </Box>
            <Box
              className={`tab ${
                campaignSelectedTab === 'content' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setCampaignSelectedTab('content')}
            >
              등록 콘텐츠
            </Box>
          </Box>
          {campaignContents[campaignSelectedTab]}
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
      {value === 3 && (
        <Box>
          <Box className="PointContainer">
            <Box>
              <T>보유 포인트</T>
              <T className="YellowPoint">300,000 P</T>
            </Box>
            <Box>
              <T>누적 포인트</T>
              <T className="BlackPoint">300,000 P</T>
            </Box>
          </Box>
          <Box className="CampaignList">
            <Box
              className={`tab ${
                selectedPoint === 'accumulate' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedPoint('accumulate')}
            >
              적립 내역
            </Box>
            <Box
              className={`tab ${
                selectedPoint === 'withdraw' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedPoint('withdraw')}
            >
              출금 내역
            </Box>
            <Box
              className={`tab ${
                selectedPoint === 'application' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedPoint('application')}
            >
              출금 신청
            </Box>
          </Box>
          {potintContents[selectedPoint]}
        </Box>
      )}
      {/* 고객센터 */}
      {value === 4 && (
        <Box>
          <FAQList faqData={faqData} />
          <Box className="FaqButton">
            <Stack spacing={2} className="Paginations">
              <Pagination count={5} />
            </Stack>
            <Button className="Faq">문의하기</Button>
          </Box>
        </Box>
      )}
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
      <Box className="LastContainer">
        <Box className="MyPageBox">
          <Box className="TabBox">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="마이" {...a11yProps(0)} />
              <Tab label="캠페인" {...a11yProps(1)} />
              <Tab label="내 정보" {...a11yProps(2)} />
              <Tab label="포인트" {...a11yProps(3)} />
              <Tab label="고객센터" {...a11yProps(4)} />
            </Tabs>
            {/* <Button className="NewButton">새 캠페인 등록</Button>
            <Box className="PCTextBox">
              <T>캠페인 등록이 처음이신가요?</T>
              <T>
                캠페인 미션이 생소하시거나
                <br />
                이미지를 제공하기 어려우신 경우
                <br />
                체리뷰에 문의해보세요.
              </T>
            </Box>
            <Box className="TellBox">
              <T>1577-0000</T>
              <ArrowForwardIosIcon />
            </Box>
            <Box className="Section" /> */}
          </Box>
          <Box className="ContentsBox">
            <CustomTabPanel value={value} index={0}></CustomTabPanel>
            <CustomTabPanel value={value} index={1}></CustomTabPanel>
            <CustomTabPanel value={value} index={2}></CustomTabPanel>
            <CustomTabPanel value={value} index={3}></CustomTabPanel>
            <CustomTabPanel value={value} index={4}></CustomTabPanel>
          </Box>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default MyPage
