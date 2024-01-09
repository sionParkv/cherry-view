import {
  Box,
  Container,
  Tab,
  Tabs,
  TextField,
  Button,
  Typography as T,
} from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { components } from '../component/index'
import '../assets/SearchID.scss'
import { useNavigate } from 'react-router-dom'

function CustomTabPanel(props) {
  const { value, index, ...other } = props

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }
  const goToSubmitID = () => {
    navigate('/submitid')
  }

  return (
    <Box
      role="tabpanel"
      className="TabPanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {/* 휴대폰 번호 */}
      {value === 0 && (
        <Box>
          <TextField label="이름" className="One" />
          <TextField label="휴대폰번호" className="One" />
          <Button className="SearchButton">아이디 찾기</Button>
          <Box className="BottomBox">
            <T>비밀번호 찾기</T>
            <Box className="Section" />
            <T onClick={goToLogin}>로그인 하기</T>
          </Box>
        </Box>
      )}
      {/* 이메일 */}
      {value === 1 && (
        <Box>
          <TextField label="이름" className="One" />
          <TextField label="이메일" className="One" />
          <Button className="SearchButton" onClick={goToSubmitID}>
            아이디 찾기
          </Button>
          <Box className="BottomBox">
            <T>비밀번호 찾기</T>
            <Box className="Section" />
            <T onClick={goToLogin}>로그인 하기</T>
          </Box>
        </Box>
      )}
    </Box>
  )
}

// 탭 컨트롤
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

const SearchID = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container className="SearchID">
      <components.Header />
      <Box className="BasicBox">
        {' '}
        <Box className="SearchBox">
          <Box className="TextBox">
            <T>아이디 찾기</T>
            <T>회원가입시 등록한 정보로 찾을 수 있습니다.</T>
          </Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="휴대폰 번호" {...a11yProps(0)} />
            <Tab label="이메일" {...a11yProps(1)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}></CustomTabPanel>
          <CustomTabPanel value={value} index={1}></CustomTabPanel>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default SearchID
