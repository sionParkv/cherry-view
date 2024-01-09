import {
  Box,
  Container,
  Input,
  Tab,
  Tabs,
  TextField,
  Typography as T,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { components } from '../component/index'
import { images } from '../images/index'
import '../assets/Join.scss'
import { useNavigate } from 'react-router-dom'

function CustomTabPanel(props) {
  // 체크박스
  const [selectAll, setSelectAll] = useState(false)
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  })
  // 전체동의
  const handleSelectAllChange = (event) => {
    const { checked } = event.target
    setSelectAll(checked)
    setCheckboxValues({
      checkbox1: checked,
      checkbox2: checked,
      checkbox3: checked,
      checkbox4: checked,
      checkbox5: checked,
      checkbox6: checked,
    })
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }))
  }

  // 패스워드
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [validPassword, setValidPassword] = useState(true)

  const validatePassword = (password) => {
    // 비밀번호가 8자리 이상이고 영문과 숫자가 혼합되어 있는지 확인하는 정규표현식
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(password)
  }

  // 비밀번호
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    if (confirmPassword && newPassword !== confirmPassword) {
      setPasswordsMatch(false)
    } else {
      setPasswordsMatch(true)
    }
    setValidPassword(validatePassword(newPassword))
  }
  // 비밀번호 확인
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword)
    if (password && newConfirmPassword !== password) {
      setPasswordsMatch(false)
    } else {
      setPasswordsMatch(true)
    }
  }

  const navigate = useNavigate()

  // 회원가입 버튼
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validPassword) {
      alert('비밀번호는 8자리 이상, 영문과 숫자 조합으로 입력해야 합니다.')
    } else {
      navigate('/searchid')
    }
  }

  const { value, index, ...other } = props

  return (
    <Box
      role="tabpanel"
      className="TabPanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {/* 체험단 회원가입 */}
      {value === 0 && (
        <Box className="TypeOne">
          <T className="DupleCheck">중복확인</T>
          <TextField label="이메일" className="One" />
          <TextField label="활동명" className="One" />
          <TextField
            label="비밀번호"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <T className="Condition">
            비밀번호는 8자리 이상, 영문과 숫자 조합으로 입력해주세요
          </T>
          <TextField
            className="One"
            label="비밀번호 확인"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={!passwordsMatch}
          />
          {!passwordsMatch && <T color="error">비밀번호가 같지 않습니다.</T>}
          <T className="DupleCheck">인증번호</T>
          <TextField label="연락처" className="One" />
          <TextField label="인증번호" />
          <FormGroup className="AgreeBox">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
              }
              label="전체 동의"
            />
            <Box className="Section"></Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.checkbox1}
                  onChange={handleCheckboxChange}
                  name="checkbox1"
                />
              }
              label="[필수] 서비스 이용약관에 동의합니다."
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.checkbox2}
                  onChange={handleCheckboxChange}
                  name="checkbox2"
                />
              }
              label="[필수] 만 14세 이상입니다."
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.checkbox3}
                  onChange={handleCheckboxChange}
                  name="checkbox3"
                />
              }
              label="[필수] 개인정보 수집 및 이용에 동의합니다."
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.checkbox4}
                  onChange={handleCheckboxChange}
                  name="checkbox4"
                />
              }
              label="[선택] 이벤트 및 혜택안내 개인정보 수집 · 이용에 동의합니다."
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.checkbox5}
                  onChange={handleCheckboxChange}
                  name="checkbox5"
                />
              }
              label="[선택] 이메일 수신 동의"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.checkbox6}
                  onChange={handleCheckboxChange}
                  name="checkbox6"
                />
              }
              label="[선택] SNS 수신 동의"
            />
          </FormGroup>
          <Button className="JoinButton" onClick={handleSubmit}>
            회원가입
          </Button>
          <Box className="TextBox">
            <T>간편 로그인이 필요하신가요?</T>
            <T>SNS 계정 로그인</T>
          </Box>

          <Box className="IcoBox">
            <img src={images.kakaoIco} />
            <img src={images.naverIco} />
            <img src={images.facebookIco} />
            <img src={images.appleIco} />
            <img src={images.googleIco} />
          </Box>
        </Box>
      )}
      {/* 광고주 회원가입 */}
      {value === 1 && (
        <Box>
          <Input></Input>
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

const Join = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="xl" className="JoinContainer">
      <components.Header />
      <Box className="BasicBox">
        {' '}
        <Box className="JoinBox">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="체험단 회원가입" {...a11yProps(0)} />
            <Tab label="광고주 회원가입" {...a11yProps(1)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}></CustomTabPanel>
          <CustomTabPanel value={value} index={1}></CustomTabPanel>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default Join
