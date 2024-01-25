/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Collapse,
  Container,
  IconButton,
  Pagination,
  Paper,
  Stack,
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
import { ResponsiveLine } from '@nivo/line'
import { PieChart } from 'react-minimal-pie-chart'
import PropTypes from 'prop-types'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SyncIcon from '@mui/icons-material/Sync'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import '../assets/OwnerPage.scss'
import { components } from '../component/index'
import { images } from '../images/index'

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
// 고객센터
const FAQList = ({ faqData }) => {
  return (
    <Box>
      {faqData.map((faq, index) => (
        <ExpandableTab key={index} {...faq} />
      ))}
    </Box>
  )
}
// 포인트 결제 화면
function PaymentScreen() {
  const [showPaymentScreen2, setShowPaymentScreen2] = useState(false)

  const handleClick2 = () => {
    setShowPaymentScreen2(true)
  }
  return (
    <Box>
      {showPaymentScreen2 ? (
        <Payment2 />
      ) : (
        <Box className="PaymentScreenContainer">
          <Box className="TopBox">
            <T>남은 캠페인 포인트</T>
            <T>8,500P</T>
          </Box>
          <Box className="PointContainers">
            <Box className="HotBox">
              <T className="HotOne">300,000P</T>
              <Box className="HotTwo">HOT</Box>
              <T className="HotThree">2,000,000 원</T>
            </Box>
            <Box className="PointBox">
              <T>30,000P</T>
              <T>250,000 원</T>
            </Box>
            <Box className="PointBox">
              <T>150,000P</T>
              <T>1,250,000 원</T>
            </Box>
            <Box className="PointBox">
              <T>300,000P</T>
              <T>2,000,000 원</T>
            </Box>
            <Box className="PointBox">
              <T>600,000P</T>
              <T>4,000,000 원</T>
            </Box>
            <Box className="PointBox">
              <T>900,000P</T>
              <T>6,000,000 원</T>
            </Box>
          </Box>
          <Box className="PaymentBox">
            <Button onClick={handleClick2}>구매하기</Button>
            <Box className="TextBox">
              <T>
                · 결제 이후 포인트를 사용하지 않은 경우, 결제일로부터 7일 이내
                고객센터로 문의하여 주시면 수수료 없이 결제 취소가 가능하오니
                고객센터로 문의해주세요. <br />
                · 결제 이후 포인트를 사용한 경우, 사용하지 않은 포인트만 환불
                가능하며 환불 수수료(환불 금액의 10%)를 제외한 나머지 금액이
                환불됩니다
                <br />· 기타문의 사항 및 궁금하신 점은 고객센터 문의 또는
                이용약관, 유료서비스 이용약관에서 확인할 수 있습니다.
              </T>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

function Payment2() {
  const [selectedBox, setSelectedBox] = useState(null)

  const handleClick = (index) => {
    setSelectedBox(index === selectedBox ? null : index)
  }

  return (
    <Box className="PaymentScreenContainer">
      <Box className="TopBox2">
        <T>150,000P 구매</T>
        <T>1,250,000 원</T>
      </Box>
      <Box className="TypeBox">
        {[
          '간편결제',
          '카드결제',
          '무통장입금',
          '네이버페이',
          '카카오페이',
          '핸드폰 결제',
          '토스페이',
        ].map((option, index) => (
          <Box
            className="Type"
            key={index}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: selectedBox === index ? 'white' : '#f4f4f4',
              border: selectedBox === index ? '2px solid #ffc043' : 'none',
              color: selectedBox === index ? '#ffc043' : 'black',
              cursor: 'pointer',
            }}
          >
            {option}
          </Box>
        ))}
      </Box>
      <Box className="PaymentBox">
        <Button>구매하기</Button>
        <Box className="TextBox">
          <T>
            · 결제 이후 포인트를 사용하지 않은 경우, 결제일로부터 7일 이내
            고객센터로 문의하여 주시면 수수료 없이 결제 취소가 가능하오니
            고객센터로 문의해주세요. <br />
            · 결제 이후 포인트를 사용한 경우, 사용하지 않은 포인트만 환불
            가능하며 환불 수수료(환불 금액의 10%)를 제외한 나머지 금액이
            환불됩니다
            <br />· 기타문의 사항 및 궁금하신 점은 고객센터 문의 또는 이용약관,
            유료서비스 이용약관에서 확인할 수 있습니다.
          </T>
        </Box>
      </Box>
    </Box>
  )
}

// 탭 컨텐츠
function CustomTabPanel(props) {
  // 캠페인 리스트 collapse
  const [campaignOpen, setCampaignOpen] = useState(false)

  const handleCampaignToggle = () => {
    setCampaignOpen(!campaignOpen)
  }

  const { value, index, ...other } = props
  // 대시보드 탭
  const [dashboardTab, setDashboardTab] = useState('blog') // 초기 탭 설정
  // 그래프 탭
  const [graphTab, setGraphTab] = useState('all') // 초기 탭 설정

  // 내정보 탭
  const [selectedTab, setSelectedTab] = useState('basic') // 초기 탭 설정
  // 포인트 탭
  const [selectedPoint, setSelectedPoint] = useState('accumulate') // 초기 탭 설정

  // 사용 내역 테이블
  function createData(id, date, reason, point, point2) {
    return { id, date, reason, point, point2 }
  }

  const rows = [
    createData(
      1,
      '2023.12.13',
      '수제한방 모란꽃차 캠페인 참여',
      '-200,000P',
      '100,000P'
    ),
    createData(
      2,
      '2023.12.13',
      '수제한방 모란꽃차 캠페인 참여',
      '-200,000P',
      '100,000P'
    ),
    createData(
      3,
      '2023.12.13',
      '수제한방 모란꽃차 캠페인 참여',
      '-200,000P',
      '100,000P'
    ),
    createData(
      4,
      '2023.12.13',
      '수제한방 모란꽃차 캠페인 참여',
      '-200,000P',
      '100,000P'
    ),
  ]
  // 출금 내역 테이블
  function createData2(id, date, point, amount, point2) {
    return { id, date, point, amount, point2 }
  }

  const rows2 = [
    createData2(
      1,
      '2023.12.13 10:00:00',
      '150,000P',
      '1,250,000원',
      '158,500P'
    ),
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

  // 차트 데이터
  const data = [
    {
      id: '총 조회수',
      data: [
        { x: 0, y: 300000 },
        { x: 1, y: 300000 },
        { x: 2, y: 400000 },
        { x: 3, y: 400000 },
        { x: 4, y: 500000 },
        { x: 5, y: 600000 },
        { x: 6, y: 600000 },
        { x: 7, y: 700000 },
        { x: 8, y: 700000 },
        { x: 9, y: 800000 },
        { x: 10, y: 900000 },
        { x: 11, y: 1000000 },
        { x: 12, y: 1000000 },
      ],
    },
  ]
  // 예제 데이터
  const data2 = [
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]
  // 캠페인 리스트 탑 데이터
  const [selectedParagraph1, setSelectedParagraph1] = useState(null)

  const handleParagraphClick1 = (index) => {
    setSelectedParagraph1(index)
  }
  const [selectedParagraph2, setSelectedParagraph2] = useState(null)

  const handleParagraphClick2 = (index) => {
    setSelectedParagraph2(index)
  }
  const [selectedParagraph3, setSelectedParagraph3] = useState(null)

  const handleParagraphClick3 = (index) => {
    setSelectedParagraph3(index)
  }

  const paragraphs1 = ['전체', '지역', '제품', '기자단', '프리미어']
  const paragraphs2 = ['전체', '블로그', '인스타그램', '유튜브']
  const paragraphs3 = ['전체', '1년', '1주일', '1개월', '3개월']
  // 캠페인 리스트 테이블
  function createData4(
    id,
    img,
    title,
    tag,
    sns,
    person,
    date1,
    date2,
    date3,
    date4,
    contents,
    views
  ) {
    return {
      id,
      img,
      title,
      tag,
      sns,
      person,
      date1,
      date2,
      date3,
      date4,
      contents,
      views,
    }
  }

  const rows4 = [
    createData4(
      1,
      images.mainImg,
      '수제한방 모란꽃차',
      '#배송 #백설 # 수제한방차',
      images.naver,
      '20',
      '11.27 ~ 12.12',
      '12.13',
      '12.14 ~ 12.24',
      '12.29',
      '24',
      '1,324'
    ),
    createData4(
      2,
      images.mainImg,
      '수제한방 모란꽃차',
      '#배송 #백설 # 수제한방차',
      images.naver,
      '20',
      '11.27 ~ 12.12',
      '12.13',
      '12.14 ~ 12.24',
      '12.29',
      '24',
      '1,324'
    ),
    createData4(
      3,
      images.mainImg,
      '수제한방 모란꽃차',
      '#배송 #백설 # 수제한방차',
      images.naver,
      '20',
      '11.27 ~ 12.12',
      '12.13',
      '12.14 ~ 12.24',
      '12.29',
      '24',
      '1,324'
    ),
    createData4(
      4,
      images.mainImg,
      '수제한방 모란꽃차',
      '#배송 #백설 # 수제한방차',
      images.naver,
      '20',
      '11.27 ~ 12.12',
      '12.13',
      '12.14 ~ 12.24',
      '12.29',
      '24',
      '1,324'
    ),
  ]
  // 결제 화면 넘기기
  const [showPaymentScreen, setShowPaymentScreen] = useState(false)

  const handleClick = () => {
    setShowPaymentScreen(true)
  }

  // 그래프 탭
  const graphContents = {
    all: (
      <Box>
        <Box className="Graph">
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false,
            }}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </Box>
        <Box className="MiddleText">
          <T>캠페인 진행 비율</T>
          <T>
            홍보가 부족한 미디어가 있는지 확인해보세요!
            <br />
            어떤 미디어가 가장 효과적이셨나요?
          </T>
        </Box>
        <PieChart
          data={data2}
          style={{ height: '200px' }}
          lineWidth={15}
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
          labelStyle={{
            fontSize: '5px',
            fontFamily: 'sans-serif',
          }}
          // labelPosition={12}
        />
      </Box>
    ),
    year: <Box>22</Box>,
    weekend: <Box>33</Box>,
    month: <Box>44</Box>,
    threemonth: <Box>55</Box>,
  }

  // 대시보드 탭 컨텐츠
  const dashboardContents = {
    // 블로그
    blog: (
      <Box>
        <Box className="TopContents">
          <Box className="TopBox">
            <T>21</T>
            <T>전체 캠페인</T>
          </Box>
          <Box className="TopBox">
            <T>362</T>
            <T>전체 콘텐츠</T>
          </Box>
          <Box className="TopBox">
            <T>1,480,000</T>
            <T>누적 조회수</T>
          </Box>
        </Box>
        <Box className="GraphBox">
          <T className="GraphTilte">컨텐츠 조회수 누적 성과</T>
          <Box>
            <Box className="GraphList">
              <Box
                className={`tab ${
                  graphTab === 'all' ? 'SelectedTab' : 'NoSelect'
                }`}
                onClick={() => setGraphTab('all')}
              >
                전체
              </Box>
              <Box
                className={`tab ${
                  graphTab === 'year' ? 'SelectedTab' : 'NoSelect'
                }`}
                onClick={() => setGraphTab('year')}
              >
                1년
              </Box>
              <Box
                className={`tab ${
                  graphTab === 'weekend' ? 'SelectedTab' : 'NoSelect'
                }`}
                onClick={() => setGraphTab('weekend')}
              >
                1주일
              </Box>
              <Box
                className={`tab ${
                  graphTab === 'month' ? 'SelectedTab' : 'NoSelect'
                }`}
                onClick={() => setGraphTab('month')}
              >
                1개월
              </Box>
              <Box
                className={`tab ${
                  graphTab === 'threemonth' ? 'SelectedTab' : 'NoSelect'
                }`}
                onClick={() => setGraphTab('threemonth')}
              >
                3개월
              </Box>
              <Button className="SearchButton">조회하기</Button>
              <IconButton className="ReButton">
                <SyncIcon />
              </IconButton>
            </Box>
            {graphContents[graphTab]}
          </Box>
        </Box>
      </Box>
    ),
    insta: <Box>22</Box>,
    youtube: <Box>33</Box>,
  }

  // 내정보 탭 컨텐츠
  const tabContents = {
    // 기업정보
    basic: (
      <Box className="MyInfoContainer">
        <Box className="MyInfoSection" />
        <Box className="BasicInfo">
          <T className="ProfileText">기업정보</T>
          <Box className="InputBox">
            <Box className="BasicBox">
              <T className="BasicText">이메일</T>
              <TextField></TextField>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">기업형태</T>
              <TextField></TextField>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">사업자 등록번호</T>
              <TextField></TextField>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">회사명</T>
              <TextField></TextField>
            </Box>
            <Box className="BasicBox">
              <T className="BasicText">대표자 명</T>
              <TextField></TextField>
            </Box>
          </Box>
        </Box>
        <Box className="MyInfoSection" />
        <Box className="BasicInfo">
          <T className="ProfileText"> 담당자 정보</T>
          <Box className="InputBox">
            <Box className="BottomBox">
              <T className="BasicText">담당자 명</T>
              <TextField></TextField>
            </Box>
            <Box className="BottomBox">
              <T className="BasicText">연락처</T>
              <TextField></TextField>
            </Box>
          </Box>
        </Box>
        <Box className="MyInfoSection" />
        <Box className="ButtonBox">
          <Button className="SaveButton">저장하기</Button>
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
  }
  // 결제 컨텐츠
  const potintContents = {
    // 사용내역
    accumulate: (
      <Box>
        <Box className="AdditionalSection" />
        <TableContainer className="PointTable" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>일자</TableCell>
                <TableCell>내용</TableCell>
                <TableCell>사용 포인트</TableCell>
                <TableCell>잔여 포인트</TableCell>
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
                  <TableCell>{row.point2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="PointSection" />
      </Box>
    ),
    // 구매내역
    withdraw: (
      <Box>
        <Box className="AdditionalSection" />
        <TableContainer className="PointTable" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>일자</TableCell>
                <TableCell>구매 포인트</TableCell>
                <TableCell>충전 금액</TableCell>
                <TableCell>잔여 포인트</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.point}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.point2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="PointSection" />
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
      {/* 대시보드 */}
      {value === 0 && (
        <Box className="DashboardContainer">
          <T className="MainText">대시보드</T>
          <T className="SubText">캠페인 현황</T>
          <Box className="CampaignList">
            <Box
              className={`tab ${
                dashboardTab === 'blog' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setDashboardTab('blog')}
            >
              블로그
            </Box>
            <Box
              className={`tab ${
                dashboardTab === 'insta' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setDashboardTab('insta')}
            >
              인스타그램
            </Box>
            <Box
              className={`tab ${
                dashboardTab === 'youtube' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setDashboardTab('youtube')}
            >
              유튜브
            </Box>
          </Box>
          {dashboardContents[dashboardTab]}
        </Box>
      )}
      {/* 캠페인 리스트 */}
      {value === 1 && (
        <Box className="CampaignContaier">
          <Box className="TopContents" onClick={handleCampaignToggle}>
            <T className="OneText">전체</T>
            <T className="TwoText">진행중인 캠페인</T>
            <IconButton className="OpenButton">
              {campaignOpen ? (
                <KeyboardArrowUpIcon
                  onClick={handleCampaignToggle}
                  variant="contained"
                  color="primary"
                />
              ) : (
                <KeyboardArrowDownIcon
                  onClick={handleCampaignToggle}
                  variant="contained"
                  color="primary"
                />
              )}
            </IconButton>
          </Box>

          <Collapse in={campaignOpen}>
            {/* 펼쳐질 내용 */}
            <Box className="OneSection">
              {paragraphs1.map((text, index) => (
                <T
                  key={index}
                  onClick={() => handleParagraphClick1(index)}
                  style={{
                    color: selectedParagraph1 === index ? 'black' : 'gray',
                  }}
                >
                  {text}
                </T>
              ))}
            </Box>
            <Box className="BottomSection" />
            <Box className="TwoSection">
              {paragraphs2.map((text, index) => (
                <T
                  key={index}
                  onClick={() => handleParagraphClick2(index)}
                  style={{
                    color: selectedParagraph2 === index ? 'black' : 'gray',
                  }}
                >
                  {text}
                </T>
              ))}
            </Box>
            <Box className="BottomSection" />
            <Box className="ThreeSection">
              {paragraphs3.map((text, index) => (
                <T
                  key={index}
                  onClick={() => handleParagraphClick3(index)}
                  style={{
                    color: selectedParagraph3 === index ? 'black' : 'gray',
                  }}
                >
                  {text}
                </T>
              ))}
            </Box>
          </Collapse>
          <Box className="SearchBox2">
            <Button className="SearchButton">조회하기</Button>
            <IconButton className="ReButton">
              <SyncIcon />
            </IconButton>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">캠페인 정보</TableCell>
                  <TableCell align="center">캠페인 기간</TableCell>
                  <TableCell align="center">컨텐츠 수</TableCell>
                  <TableCell align="center">총 조회수</TableCell>
                  <TableCell align="center">총 조회수</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows4.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className="OneCell" component="th" scope="row">
                      <Box className="MainImg">
                        <img src={row.img} />
                      </Box>
                      <Box className="TextBox">
                        <T className="TextOne">{row.title}</T>
                        <T className="TextTwo">{row.tag}</T>
                        <Box className="SnsBox">
                          <img src={row.sns} />
                          <T>모집인원 | {row.person}명</T>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell className="TwoCell" align="center">
                      <Box className="TextBox">
                        <T>캠페인 신청기간</T>
                        <T> {row.date1}</T>
                      </Box>
                      <Box className="TextBox">
                        <T>인프루언서 발표</T>
                        <T> {row.date2}</T>
                      </Box>
                      <Box className="TextBox">
                        <T>콘텐츠 등록기간 </T>
                        <T>{row.date3}</T>
                      </Box>
                      <Box className="TextBox">
                        <T>캠페인 결과 발표 </T>
                        <T>{row.date4}</T>
                      </Box>
                    </TableCell>
                    <TableCell className="ThreeCell" align="center">
                      <T className="Number">{row.contents}</T>
                    </TableCell>
                    <TableCell className="FourCell" align="center">
                      <T className="Number">{row.views}</T>
                    </TableCell>
                    <TableCell className="FiveCell" align="center">
                      <Box className="ReRegi">재 등록</Box>
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
      )}
      {/* 회원정보 */}
      {value === 2 && (
        <Box>
          <Box className="CampaignList">
            <Box
              className={`tab ${
                selectedTab === 'basic' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('basic')}
            >
              기업정보
            </Box>
            <Box
              className={`tab ${
                selectedTab === 'password' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setSelectedTab('password')}
            >
              비밀번호 변경
            </Box>
          </Box>
          {tabContents[selectedTab]}
        </Box>
      )}
      {/* 결제 */}
      {value === 3 && (
        <Box>
          {showPaymentScreen ? (
            <PaymentScreen />
          ) : (
            <Box>
              <Box className="PointContainer">
                <Box className="TopBox">
                  <Box className="TextBox">
                    <T>남은 캠페인 포인트</T>
                    <T>8,500P</T>
                  </Box>
                  <Button onClick={handleClick} className="PointButton">
                    포인트 충전
                  </Button>
                </Box>
              </Box>
              <Box className="CampaignList">
                <Box
                  className={`tab ${
                    selectedPoint === 'accumulate' ? 'SelectedTab' : 'NoSelect'
                  }`}
                  onClick={() => setSelectedPoint('accumulate')}
                >
                  사용 내역
                </Box>
                <Box
                  className={`tab ${
                    selectedPoint === 'withdraw' ? 'SelectedTab' : 'NoSelect'
                  }`}
                  onClick={() => setSelectedPoint('withdraw')}
                >
                  구매 내역
                </Box>
              </Box>
              {potintContents[selectedPoint]}
            </Box>
          )}
        </Box>
      )}
      {/* 패널티 */}
      {value === 4 && <Box>!!!!!!!!!!!!!</Box>}
      {/* 고객센터 */}
      {value === 5 && (
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

const OwnerPage = () => {
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
              <Tab label="대시보드" {...a11yProps(0)} />
              <Tab label="캠페인 리스트" {...a11yProps(1)} />
              <Tab label="회원정보" {...a11yProps(2)} />
              <Tab label="결제" {...a11yProps(3)} />
              <Tab label="패널티" {...a11yProps(4)} />
              <Tab label="고객센터" {...a11yProps(5)} />
            </Tabs>
            <Button className="NewButton">새 캠페인 등록</Button>
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
            <Box className="Section" />
          </Box>
          <Box className="ContentsBox">
            <CustomTabPanel value={value} index={0}></CustomTabPanel>
            <CustomTabPanel value={value} index={1}></CustomTabPanel>
            <CustomTabPanel value={value} index={2}></CustomTabPanel>
            <CustomTabPanel value={value} index={3}></CustomTabPanel>
            <CustomTabPanel value={value} index={4}></CustomTabPanel>
            <CustomTabPanel value={value} index={5}></CustomTabPanel>
          </Box>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default OwnerPage
