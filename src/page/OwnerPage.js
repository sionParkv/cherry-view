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
  Select,
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
import React, { Fragment, useState } from 'react'
import { ResponsiveLine } from '@nivo/line'
import { PieChart } from 'react-minimal-pie-chart'
import PropTypes from 'prop-types'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SyncIcon from '@mui/icons-material/Sync'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'
import FolderIcon from '@mui/icons-material/Folder'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckIcon from '@mui/icons-material/Check'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps'

import '../assets/OwnerPage.scss'
import { components } from '../component/index'
import { images } from '../images/index'
import { useNavigate } from 'react-router-dom'

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
// 결제 화면
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
//  캠페인 리스트 상세화면
function CampaignDetail() {
  const contents = [
    '제품 캠페인',
    '뷰티',
    '20명 이상 모집',
    '마감임박',
    '산뜻한 발림',
    '겨울 필수템',
    'The Orcinary',
    'MD 추천',
    '친환경 제품',
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

  const navermaps = useNavermaps()

  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked)
  }
  return (
    <Box>
      <Box className="DetailTop">
        <NotificationsIcon className="AlarmIcon" />
        <T className="Success">컴펌이 완료되었습니다</T>
        <T className="Info">캠페인 신청기간에 자동으로 정상 업로드 됩니다.</T>
        <ArrowForwardIcon className="ArrowIcon" />
      </Box>
      <Box className="DetailSecond">
        <img src={images.mainImg} />
        <Box className="OneBox">
          <T>자연을 담은 Coverage Foundation</T>
          <T>The Orcinary</T>
        </Box>
        <Box className="TwoBox">
          <T>체험단 페이지</T>
          <ArrowForwardIosIcon />
        </Box>
      </Box>
      <Box className="TagBox">
        {contents.map((content, index) => (
          <Box className="Tag" key={index}>
            # {content}
          </Box>
        ))}
      </Box>
      <Box className="Boxes">
        <Box>
          <T>캠페인 컨펌</T>
          <T>~11.26</T>
        </Box>
        <Box>
          <T>캠페인 신청기간</T>
          <T>11.27 ~ 12.12</T>
        </Box>
        <Box>
          <T>인플루언서 발표</T>
          <T>12.13</T>
        </Box>
        <Box>
          <T>콘텐츠 등록기간</T>
          <T>12.14 ~ 12.24</T>
        </Box>
        <Box>
          <T>캠페인 결과발표</T>
          <T>12.29</T>
        </Box>
        <Box>
          <T>보고서</T>
          <T>12.30~</T>
        </Box>
      </Box>
      <Box className="MiddleSection">
        <IconButton className="CheckIcon">
          <CheckIcon />
        </IconButton>
        <T className="OneText">컨펌이 완료되었습니다.</T>
        <T className="TwoText">캠페인 신청기간에 자동으로 정상 업로드됩니다.</T>
      </Box>
      <Box className="LeftContent">
        <Box className="TextBox">
          <T className="CampText">캠페인 정보</T>
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
        </Box>
        <Box className="HashBox">
          {contents.map((item, index) => (
            <Box className="HashInfo" key={index}>
              # {item}
            </Box>
          ))}
        </Box>
        <Box className="Section" />
        {/* 상품 정보 */}
        <Box className="TitleBox">
          <Box className="OneBox">
            <T className="Text">자연을 담은 Coverage Foundation</T>
            <IconButton onClick={handleLikeClick}>
              {liked ? <Favorite color="error" /> : <FavoriteBorder />}
            </IconButton>
          </Box>

          <Box className="PersonInfo">신청 23/20</Box>
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
            <br /> - 콘텐츠 등록 기간 내 콘텐츠 미등록 시 서비스 이용료 및 제품
            가격에 대하여 비용 청구됩니다.
            <br /> - 선정 후 단순 변심에 의한 제공내역 옵션 및 배송지 변경은
            어렵습니다.
            <br /> - 안내된 제공 내역과 다르거나, 별도 공지 없이 7일 이상
            배송되지 않는 등 진행이 어려운 경우 1:1문의로 연락해주세요.
            <br /> - 업체 측 요청에 따라 선정 인플루언서 수가 변경될 수
            있습니다.
            <br /> - 콘텐츠 작성 시 선정 된 본 캠페인의 제품만으로 단독 촬영하여
            진행되어야 합니다.
            <br /> - 작성하신 콘텐츠는 6개월 유지해야 하며, 유지하지 않을 경우
            페널티가 부과됩니다.
            <br /> - 콘텐츠 작성 시 태그 달기 부분에 제공 드린 키워드를 추가
            작성 부탁드립니다.
          </T>
        </Box>
      </Box>
    </Box>
  )
}

// 패널티 상세화면
function PanultyDetail() {
  return (
    <Box>
      <Box className="TopBox">
        <Box className="LeftContents">
          <T>패널티 사유</T>
          <T>콘텐츠</T>
        </Box>
        <Box className="MiniSection" />
        <Box className="RightContents">
          <T>관련 캠페인</T>
          <T>수제한방 모란꽃차</T>
        </Box>
      </Box>
      <Box className="UserBox">
        <T className="OneText">체험단</T>
        <Box className="Users">
          <img src={images.userPictuer} />
          <img src={images.userPictuer} />
          <img src={images.userPictuer} />
          <img src={images.userPictuer} />
        </Box>
        <T className="UserInfo">인플루언서 외 3명</T>
      </Box>
      <Box className="TitleBox">
        <T>제목</T>
        <T>콘텐츠 등록기간 내 콘텐츠를 등록하지 않았어요.</T>
      </Box>
      <Box className="ContentBox">
        <Box className="Content">
          <T>묵묵 부답입니다.</T>
          <T>2023.00.00</T>
        </Box>
        <img src={images.mainImg} />
      </Box>
      <Box className="AnswerBox">
        <T>
          안녕하세요. 체리뷰 운영팀 김관리자입니다.
          <br />
          약속된 기간에 콘텐츠 작성이 이루어지지않아 캠페인에 진행에 문제가
          있으신 내용 맞으실까요?
          <br />
          해당 내용은 운영팀에서 확인 후 적절한 패널티를 적용하도록하겠습니다.
          <br />
          완벽한 서비스를 제공해드릴 수 있도록 노력하겠습니다. 감사합니다.
        </T>
        <T>2023.00.00</T>
      </Box>
    </Box>
  )
}
// 패널티 등록 화면
function PanultyRegist({ onBack }) {
  const [selectedBox, setSelectedBox] = useState(null)

  const handleClick = (index) => {
    setSelectedBox(index === selectedBox ? null : index)
  }
  return (
    <Box>
      <Box className="TopBox2">
        <T className="MainText">패널티 사유</T>
        <Box className="TypeBox">
          {[
            '콘텐츠',
            '부적절한 표현',
            '도용',
            '불성실',
            '커뮤니티',
            '기타',
          ].map((option, index) => (
            <Box
              className="Type"
              key={index}
              onClick={() => handleClick(index)}
              style={{
                color: selectedBox === index ? '#ffc043' : 'black',
                border:
                  selectedBox === index
                    ? '2px solid #ffc043'
                    : '2px solid #e4e4e4',
                cursor: 'pointer',
              }}
            >
              {option}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="InfoBox">
        <T className="MainText">체험단 정보</T>
        <Box className="Info">
          <Box className="OneBox">
            <T className="OneText">관련 캠페인</T>
            <Select />
          </Box>
          <Box className="TwoBox">
            <T className="OneText">체험단</T>
            <Box className="FindReviewr">
              <T>해당 리뷰어 찾기</T>
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="ContentBox2">
        <T className="MainText">패널티 내용</T>
        <Box className="Right">
          <Box className="OneBox">
            <T className="OneText">제목</T>
            <TextField placeholder="사유를 간결히 작성해주세요" />
          </Box>
          <Box className="OneBox">
            <T className="OneText">패널티 내용</T>
            <TextField placeholder="패널티 사유를 작성해주세요." />
          </Box>
          <Box className="TwoBox">
            <T className="OneText">사진 첨부</T>
            <IconButton className="PictureAdd">
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box className="ButtonBox2">
        <Box onClick={onBack} className="Previous">
          이전으로
        </Box>
        <Box className="Regist">패널티 신청</Box>
      </Box>
    </Box>
  )
}
// 고객센터 상세 화면
function InfoDetailScreen() {
  return (
    <Box className="InfoDetailScreen">
      <Box className="TitleBox">
        <T>Lorem ipsum dolor sit amet, consectetur adipiscing elit</T>
        <T>2023. 11. 30</T>
      </Box>
      <Box className="ContentBox">
        <T>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip <br />
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse <br />
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, <br />
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </T>
        <img src={images.content1} />
        <T className="MainText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </T>
        <img src={images.content2} />
        <T>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip <br />
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse <br />
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, <br />
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </T>
      </Box>
      <Box className="FileBox">
        <Box className="First">
          <FolderIcon />
          <T>체리뷰 이용약관.pdf</T>
        </Box>
        <FileDownloadIcon />
      </Box>
    </Box>
  )
}

// 고객센터 아이템
const ExpandableTab = ({ question, status, date, title, answer }) => {
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
        <Box className="CollapseTitle">
          <T>{title}</T>
        </Box>
        <Box className="CollapseInfo">
          <T>{answer}</T>
          <T className="Date">{date}</T>
        </Box>
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
// 문의하기 화면
function Inqury({ onBack }) {
  const [selectedBox, setSelectedBox] = useState(null)

  const handleClick = (index) => {
    setSelectedBox(index === selectedBox ? null : index)
  }
  return (
    <Box className="InquryContainer">
      <Box className="TopInfo">
        <Box>
          산업안전보건법 제 41조 시행령에 근거하여 2018년 10월 18일 부터
          산업안전보건법에 따라 <br />
          고객응대근로자 보호조치를 시행하고 있습니다. 고객응대근로자에게 폭언,
          폭행 등을 하지 말아주세요.
        </Box>
      </Box>
      <Box className="TopBox2">
        <T className="MainText">문의 분류</T>
        <Box className="TypeBox">
          {['캠페인', '서비스', '물품', '체험단', '티켓', '기타'].map(
            (option, index) => (
              <Box
                className="Type"
                key={index}
                onClick={() => handleClick(index)}
                style={{
                  color: selectedBox === index ? '#ffc043' : 'black',
                  border:
                    selectedBox === index
                      ? '2px solid #ffc043'
                      : '2px solid #e4e4e4',
                  cursor: 'pointer',
                }}
              >
                {option}
              </Box>
            )
          )}
        </Box>
      </Box>
      <Box className="ContentBox2">
        <T className="MainText">문의 내용</T>
        <Box className="Right">
          <Box className="OneBox">
            <T className="OneText">문의 제목</T>
            <TextField placeholder="사유를 간결히 작성해주세요" />
          </Box>
          <Box className="OneBox">
            <T className="OneText">문의 내용</T>
            <TextField placeholder="패널티 사유를 작성해주세요." />
          </Box>
          <Box className="TwoBox">
            <T className="OneText">사진 첨부</T>
            <IconButton className="PictureAdd">
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box className="ButtonBox2">
        <Box onClick={onBack} className="Previous">
          이전으로
        </Box>
        <Box className="Regist">제출하기</Box>
      </Box>
      <Box></Box>
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
  // 고객센터 탭
  const [infoTab, setInfoTab] = useState('info') // 초기 탭 설정
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
  // 캠페인 상세로 넘기기
  const [showDetailScreen, setShowDetailScreen] = useState(false)

  const handleDetailClick = () => {
    setShowDetailScreen(true)
  }

  // 패널티 상세로 넘기기
  const [showPanultyScreen, setShowPanultyScreen] = useState(null)

  // 고객센터 상세로 넘기기
  const [showInfoScreen, setShowInfoScreen] = useState(null)

  // 문의하기 넘기기
  const [showInquryScreen, setShowInquryScreen] = useState(null)

  // 패널티 데이터
  const panultyContents = [
    {
      id: 1,
      content: '콘텐츠',
      message: '콘텐츠 등록기간 내 콘텐츠를 등록하지 않았어요.',
      status: '대기중',
      date: '2023.00.00',
    },
    {
      id: 2,
      content: '콘텐츠',
      message: '콘텐츠 등록기간 내 콘텐츠를 등록하지 않았어요.',
      status: '대기중',
      date: '2023.00.00',
    },
    {
      id: 3,
      content: '콘텐츠',
      message: '콘텐츠 등록기간 내 콘텐츠를 등록하지 않았어요.',
      status: '대기중',
      date: '2023.00.00',
    },
    {
      id: 4,
      content: '콘텐츠',
      message: '콘텐츠 등록기간 내 콘텐츠를 등록하지 않았어요.',
      status: '대기중',
      date: '2023.00.00',
    },
  ]
  // 고객센터 공지사항 아이템
  const infoTexts = [
    {
      id: 1,
      date1: '01',
      date2: '23.05',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
    },
    {
      id: 2,
      date1: '01',
      date2: '23.05',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
    },
    {
      id: 3,
      date1: '01',
      date2: '23.05',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
    },
    {
      id: 4,
      date1: '01',
      date2: '23.05',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
    },
    {
      id: 5,
      date1: '01',
      date2: '23.05',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
    },
  ]
  // 고객센터 데이터
  const faqData = [
    {
      question: '출금은 어떻게 신청하나요?',
      status: '답변 전',
      date: '2023.00.00',
      title: '신청해서 선정됐는데 일정이 어려워져서 큰일이에요..',
      answer:
        '안녕하세요. 갑자기 일정이 생겨서 캠페인 진행에 어려움이 생기셨군요.하지만 이런 문제가 있을 시 광고주측의 일정도 체크하여 조율하여야해서 임의로 도와드릴 수 없는 점 양해부탁드립니다.광고주 측에서 연락받으실 수 있도록 조취해드리겠습니다. 감사합니다.',
    },
    {
      question: '캠페인이 원래 이렇게 선정이 안되나요??',
      status: '답변 전',
      date: '2023.00.00',
      title: '캠페인이 원래 이렇게 선정이 안되나요?',
      answer:
        '안녕하세요. 갑자기 일정이 생겨서 캠페인 진행에 어려움이 생기셨군요.하지만 이런 문제가 있을 시 광고주측의 일정도 체크하여 조율하여야해서 임의로 도와드릴 수 없는 점 양해부탁드립니다.광고주 측에서 연락받으실 수 있도록 조취해드리겠습니다. 감사합니다.',
    },
    {
      question: '출금은 어떻게 신청하나요?',
      status: '답변 전',
      date: '2023.00.00',
      title: '저는 왜 인기가 없나요. 선정이 안됩니다.',
      answer:
        '안녕하세요. 갑자기 일정이 생겨서 캠페인 진행에 어려움이 생기셨군요.하지만 이런 문제가 있을 시 광고주측의 일정도 체크하여 조율하여야해서 임의로 도와드릴 수 없는 점 양해부탁드립니다.광고주 측에서 연락받으실 수 있도록 조취해드리겠습니다. 감사합니다.',
    },
  ]

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

  //고객센터 탭 컨텐츠
  const infoContents = {
    info: (
      <Box>
        {!showInfoScreen && (
          <Box className="InfoBox">
            <Box className="TopAlarmBox">
              <IconButton className="AlarmButton">
                <NotificationsIcon />
              </IconButton>
              <T className="AlarmText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm...
              </T>
              <AddIcon className="AddIcon" />
            </Box>
            {infoTexts.map((item) => (
              <Box
                onClick={() => setShowInfoScreen('screen1')}
                key={item.id}
                className="InfoTextBox"
              >
                <Box className="DateBox">
                  <T>{item.date1}</T>
                  <T>{item.date2}</T>
                </Box>
                <T className="AlarmText">{item.text}</T>
                <AddIcon className="AddIcon" />
              </Box>
            ))}
            <Box className="FaqButton">
              <Stack spacing={2} className="Paginations">
                <Pagination count={5} />
              </Stack>
              <Button className="Faq">문의하기</Button>
            </Box>
          </Box>
        )}
        {showInfoScreen === 'screen1' && (
          <Box>
            <InfoDetailScreen />
          </Box>
        )}
      </Box>
    ),
    one: (
      <Box>
        {!showInquryScreen && (
          <Box>
            <FAQList faqData={faqData} />
            <Box className="FaqButton">
              <Stack spacing={2} className="Paginations">
                <Pagination count={5} />
              </Stack>
              <Button
                onClick={() => setShowInquryScreen('screen1')}
                className="Faq"
              >
                문의하기
              </Button>
            </Box>
          </Box>
        )}
        {showInquryScreen === 'screen1' && (
          <Box>
            <Inqury onBack={() => setShowInquryScreen(null)} />
          </Box>
        )}
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
          {showDetailScreen ? (
            <CampaignDetail />
          ) : (
            <Box>
              <Box className="TopContents" onClick={handleCampaignToggle}>
                <T className="OneText">전체</T>
                <T className="TwoText">진행중인 캠페인</T>
                <IconButton
                  onClick={handleCampaignToggle}
                  className="OpenButton"
                >
                  {campaignOpen ? (
                    <KeyboardArrowUpIcon variant="contained" color="primary" />
                  ) : (
                    <KeyboardArrowDownIcon
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
                        onClick={handleDetailClick}
                        key={row.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          className="OneCell"
                          component="th"
                          scope="row"
                        >
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
      {value === 4 && (
        <Box className="PanultyContainer">
          {!showPanultyScreen && (
            <Box>
              {panultyContents.map((item) => (
                <Box
                  onClick={() => setShowPanultyScreen('screen2')}
                  key={item.id}
                  className="PanultyBox"
                >
                  <Box className="OneContent">
                    <T>{item.content}</T>
                    <T>{item.message}</T>
                    <Box>{item.status}</Box>
                  </Box>
                  <T className="Date">{item.date}</T>
                </Box>
              ))}
              <Box className="FaqButton">
                <Stack spacing={2} className="Paginations">
                  <Pagination count={5} />
                </Stack>
                <Button
                  onClick={() => setShowPanultyScreen('screen1')}
                  className="Faq"
                >
                  패널티 신청
                </Button>
              </Box>
            </Box>
          )}
          {showPanultyScreen === 'screen1' && (
            <PanultyRegist onBack={() => setShowPanultyScreen(null)} />
          )}
          {showPanultyScreen === 'screen2' && <PanultyDetail />}
        </Box>
      )}
      {/* 고객센터 */}
      {value === 5 && (
        <Box className="InfoContainer">
          <Box className="CampaignList">
            <Box
              className={`tab ${
                infoTab === 'info' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setInfoTab('info')}
            >
              공지사항
            </Box>
            <Box
              className={`tab ${
                infoTab === 'one' ? 'SelectedTab' : 'NoSelect'
              }`}
              onClick={() => setInfoTab('one')}
            >
              1:1 문의
            </Box>
          </Box>
          {infoContents[infoTab]}
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
  const navigate = useNavigate()

  const goToNew = () => {
    navigate('/newcampaign')
  }

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
            <Button onClick={goToNew} className="NewButton">
              새 캠페인 등록
            </Button>
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
