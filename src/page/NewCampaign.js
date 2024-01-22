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

import '../assets/NewCampaign.scss'
import { components } from '../component/index'

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
                <TextField placeholder="제공내역을 작성해주세요." />
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
          </Box>
          <Box className="Section" />
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default NewCampaign
