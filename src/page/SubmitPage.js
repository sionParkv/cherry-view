import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  IconButton,
  Select,
  Typography as T,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'

import { components } from '../component/index'
import { images } from '../images'
import '../assets/SubmitPage.scss'
import InfoIcon from '@mui/icons-material/Info'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Link, useNavigate } from 'react-router-dom'

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

const SubmitPage = () => {
  const url = 'https://www.sephora.kr/brands/the-ordinary'

  const navigate = useNavigate()

  const goToComplete = () => {
    navigate('/submitcomplete')
  }

  // 주소 찾기

  // 성별 구분
  const [selectedGender, setSelectedGender] = useState(null)

  const handleGenderClick = (gender) => {
    setSelectedGender(gender === selectedGender ? null : gender)
  }
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

  //출생년도
  const [selectedYear, setSelectedYear] = useState('')

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
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

  // 초상권 활용 동의
  const [isCheckedFirst, setIsCheckedFirst] = useState(false)
  const [isCheckedSecond, setIsCheckedSecond] = useState(false)
  const [isCheckedDeilver, setIsCheckedDeilver] = useState(false)

  const handleFirstCheckboxChange = (event) => {
    setIsCheckedFirst(event.target.checked)
  }

  const handleSecondCheckboxChange = (event) => {
    setIsCheckedSecond(event.target.checked)
  }
  const handleDeilverCheckboxChange = (event) => {
    setIsCheckedDeilver(event.target.checked)
  }

  return (
    <Container className="SubmitContainer">
      <components.TopButton />
      <components.Header />
      <Box className="SubmitPage">
        {/* 왼쪽 컨텐츠 */}
        <Box className="LeftContent">
          <T className="CampText">캠페인 신청하기 </T>
          <Box className="Section"></Box>
          <Box className="CampInfo">
            <T className="Text">캠페인 정보</T>
            <Box>
              <T className="DetailText">홈페이지</T>
              <Link
                onClick={() => {
                  window.open(url)
                }}
              >
                https://www.sephora.kr/brands/the-ordinary
              </Link>
              <Box className="DetailSection"></Box>
              <T className="DetailText">제공내역</T>
              <Box className="InfoBox">
                <T>
                  자연을 담은 Coverage Foundation 본품 1개
                  <br />
                  <br /> 색상 택 1(1호, 2호)
                  <br /> ㄴ1호 : 밝은 21호 피부 추천 / 2호 : 21~23호 피부 추천
                </T>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="CampInfo">
            <T className="Text">방문 및 예약 안내</T>
            <Box>
              <Box className="NaverMap"></Box>
              <Box className="DetailSection"></Box>
              <T className="DetailText">제공내역</T>
              <Box className="InfoBox">
                <T>
                  [영업시간] 화~일 17:00~23:30 (L.O 22:30) / 월요일 휴무
                  <br />
                  [인플루언서 방문가능일정] 화~금 17:00~23:30 (L.O 22:30)
                  <br />* 토, 일, 월 방문불가
                </T>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="CampInfo">
            <T className="Text">기본정보</T>
            <Box className="PersonInfo">
              <Box className="DetailInfo">
                <T>이름*</T>
                <TextField label="이름을 입력하세요" defaultValue="" />
              </Box>
              <Box className="DetailSection"></Box>
              <Box className="DetailInfo">
                <T>출생연도*</T>
                <components.YearSelector
                  selectedYear={selectedYear}
                  onChange={handleYearChange}
                />
              </Box>
              <Box className="DetailSection"></Box>

              <Box className="DetailInfo">
                <T>성별*</T>
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
                      color:
                        selectedGender === 'female' ? '#202020' : '#c4c4c4',
                      cursor: 'pointer',
                    }}
                  >
                    여성
                  </Box>
                </Box>
              </Box>
              <Box className="DetailSection"></Box>
              <Box className="DetailInfo">
                <T>연락처*</T>
                <TextField label="예)01012345678" defaultValue="" />
              </Box>
            </Box>
          </Box>

          <Box className="Section" />
          <Box>
            <Box className="CampInfo">
              <T className="Text">미디어 연결</T>
              <Box className="MediaContainer">
                <Box className="MediaBox">
                  <T className="BigText">미디어 연결</T>
                  <Box className="DetailBox">
                    <img src={images.naver} />
                    <T>블로그를 연결해주세요</T>
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
                <Box className="MediaText">
                  · 콘텐츠를 작성할 미디어를 등록해 주세요.
                  <br />
                  · 등록한 미디어는 선정 후 변경할 수 없습니다.
                  <br />
                  · 블로그에 전체 공개, 검색 허용이 체크된 포스팅이 1개 이상
                  있어야 합니다.
                  <br />
                  · 방문자 수 조작 및 불법 프로그램 사용 등 어뷰징 행위 적발 시,
                  페널티가 부여됩니다.
                  <br />
                </Box>
              </Box>
            </Box>
            <Box className="Section" />
            <Box className="CampInfo">
              <T className="Text">미디어 연결</T>
              <Box>
                <Box className="InstaGuide">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                  <T>인스타그램 연결 가이드 보기 </T>
                  <IconButton>
                    <KeyboardArrowUpIcon />
                  </IconButton>
                </Box>
                <Box className="GuideText">
                  <Box className="Text">
                    01. 인스타그램을 프로페셔널 계정으로 전환합니다.
                  </Box>
                  <img src={images.instaGuide} />
                  <Box className="Guide">
                    <Box>01 설정 및 개인정보 ＞ 계정 유형 도구</Box>
                    <Box>01 프로페셔널 계정으로 변환</Box>
                  </Box>
                  <Box className="Text">
                    02. 페이스북 로그인 ＞ 페이지를 생성하여 인스타그램 계정과
                    연결해주세요.
                  </Box>
                  <Box className="Text">
                    03. 인스타그램과 연결된 페이스북 페이지에서 체리뷰 권한을
                    허용해주세요.
                  </Box>
                </Box>

                <Box className="DetailSection" />
                <Box className="MediaContainer">
                  <Box className="MediaBox">
                    <T className="BigText">미디어 연결</T>
                    <Box className="DetailBox">
                      <img src={images.naver} />
                      <T>블로그를 연결해주세요</T>
                      <ArrowForwardIosIcon />
                    </Box>
                  </Box>
                  <Box className="MediaText">
                    · 콘텐츠를 작성할 미디어를 등록해 주세요.
                    <br />· 등록한 미디어는 선정 후 변경할 수 없습니다.
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="Section" />
            <Box className="CampInfo">
              <T className="Text">미디어 연결</T>
              <Box className="MediaContainer">
                <Box className="MediaBox">
                  <T className="BigText">미디어 연결</T>
                  <Box className="DetailBox">
                    <img src={images.naver} />
                    <T>블로그를 연결해주세요</T>
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
                <Box className="MediaText">
                  · 콘텐츠를 작성할 미디어를 등록해 주세요.
                  <br />
                  · 등록한 미디어는 선정 후 변경할 수 없습니다.
                  <br />
                  · 블로그에 전체 공개, 검색 허용이 체크된 포스팅이 1개 이상
                  있어야 합니다.
                  <br />
                  · 방문자 수 조작 및 불법 프로그램 사용 등 어뷰징 행위 적발 시,
                  페널티가 부여됩니다.
                  <br />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="CampInfo">
            <T className="Text">배송지 정보</T>
            <Box className="DeliveryInfo">
              <FormGroup className="CheckBox">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isCheckedDeilver}
                      onChange={handleDeilverCheckboxChange}
                    />
                  }
                  label="기본정보와 동일"
                  style={{ color: isCheckedDeilver ? '#202020' : '#c4c4c4' }}
                />
              </FormGroup>
              <Box className="DetailSection" />
              <Box className="Info">
                <T>이름*</T>
                <TextField label="이름을 작성해주세요" defaultValue="" />
              </Box>
              <Box className="DetailSection" />
              <Box className="Info">
                <T>연락처*</T>
                <TextField label="예)01012345678" defaultValue="" />
              </Box>
              <Box className="DetailSection" />
              <Box className="Info">
                <T>주소*</T>
                <components.AddressSearch />
              </Box>
            </Box>
          </Box>

          <Box className="Section" />
          <Box className="CampInfo">
            <T className="Text">추가정보</T>
            <Box className="AdditionContainer">
              <Box>
                <T className="TitleText">질문에 대한 답을 작성해주세요</T>
                <Box className="MainText">
                  스킨케어 리뷰를 전문적으로 많이 해보셨는지 기재해주세요.
                  <br />
                  답변 예시 : 스킨케어 리뷰 0건의 경험이 있습니다.
                </Box>
                <TextField label="답변을 작성해주세요" defaultValue="" />
              </Box>

              <Box className="DetailSection" />
              <Box>
                <Box className="OneContent">
                  <T>피부 타입</T>
                  <Select />
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>상의 사이즈</T>
                  <Select />
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>하의 사이즈</T>
                  <Select />
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>신발 사이즈</T>
                  <Select />
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>키</T>
                  <Select />
                </Box>
                <Box className="DetailSection" />
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
                        color:
                          selectedFace === 'unface' ? '#202020' : '#c4c4c4',
                        cursor: 'pointer',
                      }}
                    >
                      비노출
                    </Box>
                  </Box>
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>결혼 여부</T>
                  <Box className="TwoContent">
                    <Box
                      onClick={() => handleMarryClick('unmarry')}
                      sx={{
                        backgroundColor:
                          selectedMarry === 'unmarry' ? '#ffc032' : 'white',
                        color:
                          selectedMarry === 'unmarry' ? '#202020' : '#c4c4c4',
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
                        color:
                          selectedMarry === 'marry' ? '#202020' : '#c4c4c4',
                        cursor: 'pointer',
                      }}
                    >
                      기혼
                    </Box>
                  </Box>
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>자녀 여부</T>
                  <Box className="TwoContent">
                    <Box
                      onClick={() => handleChildClick('unchild')}
                      sx={{
                        backgroundColor:
                          selectedChild === 'unchild' ? '#ffc032' : 'white',
                        color:
                          selectedChild === 'unchild' ? '#202020' : '#c4c4c4',
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
                        color:
                          selectedChild === 'child' ? '#202020' : '#c4c4c4',
                        cursor: 'pointer',
                      }}
                    >
                      있음
                    </Box>
                  </Box>
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>반려동물</T>
                  <Box style={styles.container} className="ThreeContent">
                    {['없음', '강아지', '고양이', '기타'].map((boxName) => (
                      <Box
                        key={boxName}
                        style={{
                          ...styles.box,
                          ...(selectedBox === boxName
                            ? styles.orangeBox
                            : null),
                        }}
                        onClick={() => handleBoxClick(boxName)}
                      >
                        {boxName}
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>직업 분류</T>
                  <Select />
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>카메라</T>
                  <Box style={styles.container} className="ThreeContent">
                    {['휴대폰', '미러리스', 'DSLR', '기타'].map((boxName) => (
                      <Box
                        key={boxName}
                        style={{
                          ...styles.box,
                          ...(selectedCamera === boxName
                            ? styles.orangeBox
                            : null),
                        }}
                        onClick={() => handleCameraClick(boxName)}
                      >
                        {boxName}
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box className="DetailSection" />
                <Box className="OneContent">
                  <T>미디어 공동 운영</T>
                  <Box className="TwoContent">
                    <Box
                      onClick={() => handleMediaClick('media')}
                      sx={{
                        backgroundColor:
                          selectedMedia === 'media' ? '#ffc032' : 'white',
                        color:
                          selectedMedia === 'media' ? '#202020' : '#c4c4c4',
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
                        color:
                          selectedMedia === 'unmedia' ? '#202020' : '#c4c4c4',
                        cursor: 'pointer',
                      }}
                    >
                      있음
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="Section" />
        </Box>
        {/* 오른쪽 컨텐츠 */}
        <Box className="RightContent">
          <img className="MainImage" src={images.mainImg} />
          <T className="MainText">자연을 담은 Coverage Foundation</T>
          <T className="SubText">#배송 #백설 #수제한방차</T>
          <Box className="Period">
            캠페인 신청기간 &nbsp;&nbsp;11.27 ~ 12.12
          </Box>
          <Box className="Media">
            <T>모집 미디어</T>
            <img src={images.naver}></img>
            <T>네이버 블로그</T>
          </Box>
          <Box>
            <FormGroup className="CheckBox">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCheckedFirst}
                    onChange={handleFirstCheckboxChange}
                  />
                }
                label="초상권 활용에 동의합니다."
                style={{ color: isCheckedFirst ? '#202020' : '#c4c4c4' }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCheckedSecond}
                    onChange={handleSecondCheckboxChange}
                  />
                }
                label="캠페인 유의사항과 개인정보 및 컨텐츠 제3자 제공, 저작물 이용에 동의합니다."
                style={{ color: isCheckedSecond ? '#202020' : '#c4c4c4' }}
              />
            </FormGroup>
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

export default SubmitPage
