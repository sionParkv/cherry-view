/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Input,
  Typography as T,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import 'react-quill/dist/quill.snow.css' // Quill의 스타일을 불러옵니다.
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import '../assets/NewCampaign.scss'
import { components } from '../component/index'
import ReactQuill from 'react-quill'
// import { Today } from '@mui/icons-material'

const NewCampaign = () => {
  // 캠페인 분류
  const [selectedCampaign, setselectedCampaign] = useState(null)

  const handleCampaignClick = (index) => {
    setselectedCampaign(index === selectedCampaign ? null : index)
  }
  // 프리미어 여부
  const [isCheckedFirst, setIsCheckedFirst] = useState(false)

  const handleFirstCheckboxChange = (event) => {
    setIsCheckedFirst(event.target.checked)
  }
  // 구매형 캠페인
  const [isCheckedSecond, setIsCheckedSecond] = useState(false)

  const handleSecondCheckboxChange = (event) => {
    setIsCheckedSecond(event.target.checked)
  }
  // 캠페인 분류
  const boxNames = [
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
    '도서',
  ]
  const [selectedBoxes, setSelectedBoxes] = useState(
    Array(boxNames.length).fill(false)
  )

  const handleBoxClick = (index) => {
    const newSelectedBoxes = [...selectedBoxes]

    // 클릭한 상자가 선택되지 않았거나 이미 선택된 상자가 2개 이하인 경우에만 토글
    if (
      !newSelectedBoxes[index] ||
      newSelectedBoxes.filter(Boolean).length <= 2
    ) {
      newSelectedBoxes[index] = !newSelectedBoxes[index]
      setSelectedBoxes(newSelectedBoxes)
    }
  }
  // 이미지 파일 가져오기
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setSelectedImage(reader.result)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleButtonClick = () => {
    // 파일 선택 창 열기
    const fileInput = document.getElementById('file-input')
    fileInput.click()
  }
  // 달력 필드
  const [value, setValue] = useState('')
  // react quill
  const [content, setContent] = useState('')

  const handleContentChange = (value) => {
    setContent(value)
  }
  // 신청정보 분류
  const infoNames = [
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
    '도서',
  ]
  const [selectedInfoBoxes, setSelectedInfoBoxes] = useState(
    Array(infoNames.length).fill(false)
  )

  const handleBoxInfoClick = (index) => {
    const newSelectedInfoBoxes = [...selectedInfoBoxes]

    // 클릭한 상자가 선택되지 않았거나 이미 선택된 상자가 2개 이하인 경우에만 토글
    if (
      !newSelectedInfoBoxes[index] ||
      newSelectedInfoBoxes.filter(Boolean).length <= 2
    ) {
      newSelectedInfoBoxes[index] = !newSelectedInfoBoxes[index]
      setSelectedInfoBoxes(newSelectedInfoBoxes)
    }
  }
  // 프리미어 여부
  const [isCheckedMore, setIsCheckedMore] = useState(false)

  const handleMoreCheckboxChange = (event) => {
    setIsCheckedMore(event.target.checked)
  }
  // 카운트 함수
  const [count, setCount] = useState(0)

  // 숫자를 증가시키는 함수
  const increment = () => {
    setCount(count + 1)
  }

  // 숫자를 감소시키는 함수
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  // 링크삽입
  const [isChecked1, setIsChecked1] = useState(false)

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked)
  }
  // 키워드
  const [isChecked2, setIsChecked2] = useState(false)

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked)
  }
  // 글자수
  const [isChecked3, setIsChecked3] = useState(false)

  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked)
  }
  // 동영상
  const [isChecked4, setIsChecked4] = useState(false)

  const handleCheckboxChange4 = (event) => {
    setIsChecked4(event.target.checked)
  }
  // 사진수
  const [isChecked5, setIsChecked5] = useState(false)

  const handleCheckboxChange5 = (event) => {
    setIsChecked5(event.target.checked)
  }
  // 지도삽입
  const [isChecked6, setIsChecked6] = useState(false)

  const handleCheckboxChange6 = (event) => {
    setIsChecked6(event.target.checked)
  }
  // 계정태그
  const [isChecked7, setIsChecked7] = useState(false)

  const handleCheckboxChange7 = (event) => {
    setIsChecked7(event.target.checked)
  }
  // 해시태그
  const [isChecked8, setIsChecked8] = useState(false)

  const handleCheckboxChange8 = (event) => {
    setIsChecked8(event.target.checked)
  }
  // 화질
  const [isChecked9, setIsChecked9] = useState(false)

  const handleCheckboxChange9 = (event) => {
    setIsChecked9(event.target.checked)
  }
  // 영수증 리뷰
  const [isChecked10, setIsChecked10] = useState(false)

  const handleCheckboxChange10 = (event) => {
    setIsChecked10(event.target.checked)
  }
  // 장소저장
  const [isChecked11, setIsChecked11] = useState(false)

  const handleCheckboxChange11 = (event) => {
    setIsChecked11(event.target.checked)
  }
  // 알림설정
  const [isChecked12, setIsChecked12] = useState(false)

  const handleCheckboxChange12 = (event) => {
    setIsChecked12(event.target.checked)
  }

  return (
    <Container className="NewCampaignContainer">
      <components.Header />
      <Box className="NewCampaignBox">
        <Box className="NewCampaign">
          <T className="MainText">새 캠페인 등록</T>
          <Box className="Section" />
          <Box className="BasicInfoBox">
            <T className="DetailText">기본 정보</T>
            <Box className="RightContainer">
              <Box className="RightBox">
                <T className="Text">캠페인 분류</T>
                <Box className="CategoryBox">
                  <Box
                    onClick={() => handleCampaignClick(0)}
                    sx={{
                      backgroundColor:
                        selectedCampaign === 0 ? '#ffc032' : '#fff',
                      color: selectedCampaign === 0 ? '#202020' : '#c4c4c4',
                    }}
                  >
                    제품 캠페인
                  </Box>
                  <Box
                    onClick={() => handleCampaignClick(1)}
                    sx={{
                      backgroundColor:
                        selectedCampaign === 1 ? '#ffc032' : '#fff',
                      color: selectedCampaign === 1 ? '#202020' : '#c4c4c4',
                    }}
                  >
                    지역 캠페인
                  </Box>
                  <Box
                    onClick={() => handleCampaignClick(2)}
                    sx={{
                      backgroundColor:
                        selectedCampaign === 2 ? '#ffc032' : '#fff',
                      color: selectedCampaign === 2 ? '#202020' : '#c4c4c4',
                    }}
                  >
                    기자단 캠페인
                  </Box>
                </Box>
              </Box>
              <Box className="RightBox">
                <T className="Text">프리미어</T>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isCheckedFirst}
                        onChange={handleFirstCheckboxChange}
                      />
                    }
                    label="프리미어 신청 가능"
                    style={{ color: isCheckedFirst ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
              </Box>
              <Box className="RightDetailBox">
                <Box className="RightDetail">
                  <T className="Text">구매형 캠페인</T>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isCheckedSecond}
                          onChange={handleSecondCheckboxChange}
                        />
                      }
                      label="구매형 캠페인 (체험단이 직접 구매 후 리뷰를 작성합니다.)"
                      style={{ color: isCheckedSecond ? '#202020' : '#c4c4c4' }}
                    />
                  </FormGroup>
                </Box>
                <Box className="RightBottomBox">
                  * 구매평체험단이란? <br />
                  - 상품을 선정된 체험단이 제공 링크를 통해 직접 구매 후,
                  콘텐츠와 구매후기를 함께 작성하면
                  <br /> 해당 캠페인 업체에서 체험단에게 페이백 해주시는 형태로
                  진행됩니다.
                  <br />
                  - 페이백 금액은 체리뷰에서 지원되지 않습니다.
                  <br />- 기간 내 콘텐츠와 구매후기를 모두 작성해주신 분들에게만
                  리워드 포인트가 제공됩니다.
                </Box>
              </Box>
              <Box className="MultipleBox">
                <Box className="Text">
                  <T>캠페인 분류</T>
                  <T>2가지 체크가능</T>
                </Box>
                <Box className="CategoryBox">
                  {boxNames.map((name, index) => (
                    <Box
                      key={index}
                      onClick={() => handleBoxClick(index)}
                      sx={{
                        backgroundColor: selectedBoxes[index]
                          ? '#ffc032'
                          : '#fff',
                        color: selectedBoxes[index] ? '#202020' : '#c4c4c4',
                      }}
                    >
                      {name}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className="HompageBox">
                <T className="Text">홈페이지</T>
                <Box className="HomeRightBox">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isCheckedFirst}
                          onChange={handleFirstCheckboxChange}
                        />
                      }
                      label="프리미어 신청 가능"
                      style={{ color: isCheckedFirst ? '#202020' : '#c4c4c4' }}
                    />
                  </FormGroup>
                  <TextField placeholder="홈페이지 URL을 작성해주세요." />
                </Box>
              </Box>
              <Box className="OfferBox">
                <T className="Text">제공 내역</T>
                <TextField multiline placeholder="제공내역을 작성해주세요." />
              </Box>
              <Box className="ImgBox">
                <T className="Text">썸네일 이미지</T>
                <Box className="InputBox">
                  <Input
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: 'none' }} // 숨김
                  />

                  <Button
                    className="SearchButton"
                    variant="contained"
                    onClick={handleButtonClick}
                  >
                    이미지 찾기
                  </Button>

                  {selectedImage && (
                    <Box>
                      <img
                        src={selectedImage}
                        alt="Selected"
                        style={{ maxWidth: '100%' }}
                      />
                    </Box>
                  )}
                  <Box />
                </Box>
              </Box>
              <Box className="ImgBox">
                <T className="Text">상세 이미지</T>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="BasicInfoBox">
            <T className="DetailText">광고 태그</T>
            <Box className="RightContainer">
              <Box className="TagText">
                캠페인의 특징, 업체명, 상품 요약 등 간략한 태그를 생성해 주세요.
                간략하고 명확할수록 좋아요.
                <br />
                태그는 캠페인 리스트, 상세에 노출됩니다.
              </Box>
              <Box className="TagBox">
                <Box className="TagFirst">
                  <T>태그생성</T>
                  <T>최대 4개</T>
                </Box>
                <Box className="TagSecond">
                  <Box className="DetalTag">
                    <TextField placeholder="생성할 태그를 작성해주세요." />
                    <Button>생성</Button>
                  </Box>
                  <Box className="TagInfo"></Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="MediaBox">
            <T className="DetailText">홍보 미디어</T>
            <Box className="RightBox">
              <T className="Text">캠페인 분류</T>
              <Box className="CategoryBox">
                <Box
                  onClick={() => handleCampaignClick(0)}
                  sx={{
                    backgroundColor:
                      selectedCampaign === 0 ? '#ffc032' : '#fff',
                    color: selectedCampaign === 0 ? '#202020' : '#c4c4c4',
                  }}
                >
                  블로그
                </Box>
                <Box
                  onClick={() => handleCampaignClick(1)}
                  sx={{
                    backgroundColor:
                      selectedCampaign === 1 ? '#ffc032' : '#fff',
                    color: selectedCampaign === 1 ? '#202020' : '#c4c4c4',
                  }}
                >
                  인스타그램
                </Box>
                <Box
                  onClick={() => handleCampaignClick(2)}
                  sx={{
                    backgroundColor:
                      selectedCampaign === 2 ? '#ffc032' : '#fff',
                    color: selectedCampaign === 2 ? '#202020' : '#c4c4c4',
                  }}
                >
                  유튜브
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="DateBox">
            <T className="DetailText">캠페인 기간</T>
            <Box className="RightBox">
              <Box className="PeriodBox">
                <T className="PeriodText">신청기간</T>
                <Box className="PeriodDate">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        format="YYYY-MM-DD"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        format="YYYY-MM-DD"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box className="PeriodBox">
                <T className="PeriodText">인플루언서 발표</T>
                <Box className="AnnouceBox">
                  <TextField>{value}</TextField>
                </Box>
              </Box>
              <Box className="PeriodBox">
                <T className="PeriodText">콘텐츠 등록 마감 일</T>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      format="YYYY-MM-DD"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
              <Box className="PeriodBox">
                <T className="PeriodText">결과 발표 일</T>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      format="YYYY-MM-DD"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="AreaBox">
            <T className="DetailText">지역 캠페인</T>
            <Box className="RightBox">
              <Box className="RightAreaBox">
                <Box className="RightTopBox">
                  <T className="AreaText">주소</T>
                  <Box className="DeliveryBox">
                    <Box className="ButtonBox">
                      <TextField />
                      <Button>우편번호</Button>
                    </Box>
                    <TextField className="SecondText" />
                    <TextField
                      className="ThridText"
                      placeholder="상세주소를 입력해주세요"
                    />
                  </Box>
                </Box>
                <Box className="RightBottomBox">
                  <T className="AreaText">
                    영업시간 및<br />
                    방문 가능일정
                  </T>
                  <TextField
                    multiline
                    placeholder="공지하실 영업시간 및 방문 가능일정을 작성해주세요"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="MissionBox">
            <T className="DetailText">캠페인 미션</T>
            <Box className="RightBox">
              <Box className="RightTopBox">
                <T>필요한 미션을 선택 후 내용을 작성해주세요.</T>
                <T>중복선택 가능</T>
              </Box>
              <T className="MoreText">
                미션에 대한 상세한 설명이 필요하시면 아래 작성해주세요.
              </T>
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                placeholder="내용을 입력하세요..."
              />
              <Box className="WhiteSection" />
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked1}
                        onChange={handleCheckboxChange1}
                      />
                    }
                    label="링크 삽입"
                    style={{ color: isChecked1 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) 구매 가능한 쇼핑몰 링크를 넣어주세요. https://www.-" />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked2}
                        onChange={handleCheckboxChange2}
                      />
                    }
                    label="키워드"
                    style={{ color: isChecked2 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) 저자극, 매트한, 비타민C, 모든피부용" />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked3}
                        onChange={handleCheckboxChange3}
                      />
                    }
                    label="글자 수"
                    style={{ color: isChecked3 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) 800자 이상으로 작성해주세요. 작성 시 본문 키워드를 이용해 자연스러운 문장으로 작성해주세요." />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked4}
                        onChange={handleCheckboxChange4}
                      />
                    }
                    label="동영상"
                    style={{ color: isChecked4 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) 연출 컷이나 제형을 동영상이나 움짤로 넣어주세요." />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked5}
                        onChange={handleCheckboxChange5}
                      />
                    }
                    label="사진 수"
                    style={{ color: isChecked5 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) 연출 컷, 제형 사진, 사용 시 느낌을 상세히 표현해주세요. (사진은 최소 5컷 이상)" />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked6}
                        onChange={handleCheckboxChange6}
                      />
                    }
                    label="지도삽입"
                    style={{ color: isChecked6 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="특정 지점의 위치를 리뷰에 지도로 넣어달라고 요청할 수 있습니다." />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked7}
                        onChange={handleCheckboxChange7}
                      />
                    }
                    label="계정태그"
                    style={{ color: isChecked7 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="특정 계정을 태그해서 업로드를 요청할 수 있습니다." />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked8}
                        onChange={handleCheckboxChange8}
                      />
                    }
                    label="해시태그"
                    style={{ color: isChecked8 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="특정 해시태그를 요청할 수 있습니다." />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked9}
                        onChange={handleCheckboxChange9}
                      />
                    }
                    label="화질"
                    style={{ color: isChecked9 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) HD 1080P 이상으로 촬영해주세요." />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked10}
                        onChange={handleCheckboxChange10}
                      />
                    }
                    label="영수증 리뷰"
                    style={{ color: isChecked10 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) 구매하신 영수증을 첨부해주세요." />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked11}
                        onChange={handleCheckboxChange11}
                      />
                    }
                    label="장소저장"
                    style={{ color: isChecked11 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) 네이버 지도에서 장소저장을 눌러주세요." />
              </Box>
              <Box className="CheckTextBox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked12}
                        onChange={handleCheckboxChange12}
                      />
                    }
                    label="알림설정"
                    style={{ color: isChecked12 ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
                <TextField placeholder="예) 네이버 지도에서 알림설정을 눌러주세요." />
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="SubmitInfoBox">
            <T className="DetailText">신청 정보</T>
            <Box className="RightBox">
              <Box className="RightTopBox">
                <T>추가로 전달 받으실 정보를 모두 선택해주세요.</T>
                <T>중복체크 가능</T>
              </Box>
              <Box className="CategoryBox">
                {infoNames.map((name, index) => (
                  <Box
                    key={index}
                    onClick={() => handleBoxInfoClick(index)}
                    sx={{
                      backgroundColor: selectedInfoBoxes[index]
                        ? '#ffc032'
                        : '#fff',
                      color: selectedInfoBoxes[index] ? '#202020' : '#c4c4c4',
                    }}
                  >
                    {name}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="MoreInfoBox">
            <T className="DetailText">추가 안내사항</T>
            <Box className="RightBox">
              <Box className="RightTopBox">
                <T className="MoreText">추가 안내사항 있으신가요?</T>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isCheckedMore}
                        onChange={handleMoreCheckboxChange}
                      />
                    }
                    label="네 작성할 내용이 있어요."
                    style={{ color: isCheckedMore ? '#202020' : '#c4c4c4' }}
                  />
                </FormGroup>
              </Box>
              <TextField
                multiline
                placeholder="추가 안내사항을 자유롭게 작성해주세요."
              />
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="PersonBox">
            <T className="DetailText">선정 인원</T>
            <Box className="RightBox">
              <T className="PersonText">
                몇 명의 체험단을 선정하실 예정이신가요?
              </T>
              <Box className="CountBox">
                <T>총</T>
                <Box className="Count">
                  <Button
                    className="Up"
                    variant="contained"
                    onClick={increment}
                  >
                    <KeyboardArrowUpIcon />
                  </Button>
                  <Box className="Value" variant="outlined">
                    {count}
                  </Box>
                  <Button
                    className="Down"
                    variant="contained"
                    onClick={decrement}
                  >
                    <KeyboardArrowDownIcon />
                  </Button>
                </Box>

                <T>명</T>
              </Box>
            </Box>
          </Box>
          <Box className="Section" />
          <Box className="AmountBox">
            <T className="DetailText">서비스 및 결제</T>
            <Box className="RightBox">
              <Box className="RightText">
                <T>서비스 내용</T>
                <T>서비스 금액</T>
              </Box>
              <Box className="BasicAmount">
                <Box className="DetailTextBox">
                  <T>기본 캠페인 금액</T>
                  <T>기폰 캠페인 등록 금액 (선정 가능 체험단 5명)</T>
                </Box>
                <T className="Amount">+ 30,000P</T>
              </Box>
              <Box className="MoreAmount">
                <Box className="DetailTextBox">
                  <T>추가 체험단 선정</T>
                  <T>총 10명 (+5명)</T>
                </Box>
                <T className="Amount">+ 30,000P</T>
              </Box>
              <Box className="PremierAmount">
                <Box className="DetailTextBox">
                  <T>프리미어만 신청가능</T>
                  <T>프리미어 체험단에게만 제공</T>
                </Box>
                <T className="Amount">+ (4,000P) X 10</T>
              </Box>
              <Box className="AmountSection" />
              <Box className="TotalBox">
                <T>TOTAL</T>
                <T>100,000 P</T>
              </Box>
              <Box className="AmountSection" />
              <Box className="CompleteBox">
                <Button className="Preview">미리보기</Button>
                <Button className="Request">등록 요청</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default NewCampaign
