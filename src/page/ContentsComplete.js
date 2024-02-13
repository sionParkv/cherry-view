import {
  Box,
  Button,
  Container,
  Rating,
  Typography as T,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

import { components } from '../component/index'
import '../assets/ContentsComplete.scss'
import styled from '@emotion/styled'

const theme = createTheme()

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}))

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: '전혀 다름',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: '다름',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: '조금',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: '없음',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: '전혀 없음',
  },
}

function IconContainer(props) {
  const { value, ...other } = props
  return (
    <span {...other}>
      {customIcons[value].icon}
      <p>{customIcons[value].label}</p>
    </span>
  )
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
}

const ContentsComplete = () => {
  return (
    <Container className="ContentsComplete">
      <components.Header />
      <Box className="Display">
        <Box className="WebBox">
          <Box className="MainBox">
            <CheckCircleIcon />
            <T>콘텐츠 등록 완료</T>
          </Box>
          <Box className="QuesBox">
            <T>인플루언서님,</T>
            <T>이번 캠페인은 어떠셨나요? </T>
          </Box>
          <Box className="RatingBox">
            <T className="RatingText">
              캠페인 모집공고와 상이한 점이 있었나요?{' '}
            </T>
            <ThemeProvider theme={theme}>
              <StyledRating
                className="Rating"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
              />
            </ThemeProvider>
            <T className="RatingText">
              캠페인 진행 중 불쾌한 요구를 받으셨나요?
            </T>
            <ThemeProvider theme={theme}>
              <StyledRating
                className="Rating"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
              />
            </ThemeProvider>
            <T className="RatingText">배송/예약은 순조롭게 진행됐나요?</T>
            <ThemeProvider theme={theme}>
              <StyledRating
                className="Rating"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
              />
            </ThemeProvider>
            <T className="RatingText">
              이번 캠페인에 대해 체리뷰에 <br />
              말씀해주실 사항이 있으시면 작성해주세요.{' '}
            </T>
            <components.TextBox maxLength={500} />
          </Box>
          <Box className="ButtonBox">
            <Button className="Previous">이전으로</Button>
            <Button className="Submit">제출하기</Button>
          </Box>
        </Box>
        <Box className="MobileBox">
          <Box className="MainBox">
            <CheckCircleIcon />
            <T>콘텐츠 등록 완료</T>
          </Box>
          <Box className="QuesBox">
            <T>인플루언서님,</T>
            <T>이번 캠페인은 어떠셨나요? </T>
          </Box>
          <Box className="RatingBox">
            <T className="RatingText">
              캠페인 모집공고와 상이한 점이 있었나요?{' '}
            </T>
            <ThemeProvider theme={theme}>
              <StyledRating
                className="Rating"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
              />
            </ThemeProvider>
            <T className="RatingText">
              캠페인 진행 중 불쾌한 요구를 받으셨나요?
            </T>
            <ThemeProvider theme={theme}>
              <StyledRating
                className="Rating"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
              />
            </ThemeProvider>
            <T className="RatingText">배송/예약은 순조롭게 진행됐나요?</T>
            <ThemeProvider theme={theme}>
              <StyledRating
                className="Rating"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
              />
            </ThemeProvider>
            <T className="RatingText">
              이번 캠페인에 대해 체리뷰에 <br />
              말씀해주실 사항이 있으시면 작성해주세요.{' '}
            </T>
            {/* <components.TextBox className="TextBox" maxLength={500} /> */}
          </Box>
          <Box className="ButtonBox">
            <Button className="Previous">이전으로</Button>
            <Button className="Submit">제출하기</Button>
          </Box>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default ContentsComplete
