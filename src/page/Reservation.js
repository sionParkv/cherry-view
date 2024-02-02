import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Typography as T,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'

import '../assets/Reservation.scss'
import { images } from '../images/index'
import { Navigate } from 'react-router-dom'

const Reservation = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [validPassword, setValidPassword] = useState(true)

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

  // 회원가입 버튼
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validPassword) {
      alert('비밀번호는 8자리 이상, 영문과 숫자 조합으로 입력해야 합니다.')
    } else {
      Navigate('/searchid')
    }
  }
  return (
    <Container className="Reservation">
      <Box className="MainBox">
        <Box className="TopContent">
          <img className="MainImg" src={images.reservation1} />
          <img className="MMainImg" src={images.Mreservation1} />
          <Box className="BottomClick">
            <T>응모하기</T>
            <KeyboardDoubleArrowDownOutlinedIcon />
          </Box>
        </Box>
        <Box className="BottomBox">
          <img className="SubImg" src={images.reservation2} />
          <Box className="applicationBox">
            <T className="MainText">
              체리뷰
              <br /> 사전 회원가입 및 <span className="red">응모</span>
            </T>
            <Box className="SubmitBox">
              <Box className="EmailBox">
                <TextField placeholder="이메일" />
                <Button>중복확인</Button>
              </Box>
              <TextField placeholder="닉네임" />

              <TextField
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <T className="Condition">
                비밀번호는 8자리 이상, 영문과 숫자 조합으로 입력해주세요
              </T>
              <TextField
                className="One"
                placeholder="비밀번호 확인"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={!passwordsMatch}
              />
              {!passwordsMatch && (
                <T className="Error" color="error">
                  비밀번호가 같지 않습니다.
                </T>
              )}
              <Box className="EmailBox">
                <TextField placeholder="연락처" />
                <Button>인증받기</Button>
              </Box>

              <TextField placeholder="인증번호" />
              <FormGroup className="AgreeBox">
                <FormControlLabel
                  className="AllAgree"
                  control={
                    <Checkbox
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                  }
                  label="전체 동의"
                />
                <Box className="Section"></Box>
                <Box className="DetailBox">
                  <FormControlLabel
                    className="Agree"
                    control={
                      <Checkbox
                        checked={checkboxValues.checkbox1}
                        onChange={handleCheckboxChange}
                        name="checkbox1"
                      />
                    }
                    label="[필수] 서비스 이용약관에 동의합니다."
                  />
                  <T className="DetailText">자세히보기</T>
                </Box>

                <FormControlLabel
                  className="Agree"
                  control={
                    <Checkbox
                      checked={checkboxValues.checkbox2}
                      onChange={handleCheckboxChange}
                      name="checkbox2"
                    />
                  }
                  label="[필수] 만 14세 이상입니다."
                />
                <Box className="DetailBox">
                  <FormControlLabel
                    className="Agree"
                    control={
                      <Checkbox
                        checked={checkboxValues.checkbox3}
                        onChange={handleCheckboxChange}
                        name="checkbox3"
                      />
                    }
                    label="[필수] 개인정보 수집 및 이용에 동의합니다."
                  />
                  <T className="DetailText">자세히보기</T>
                </Box>
                <Box className="DetailBox">
                  <FormControlLabel
                    className="Agree"
                    control={
                      <Checkbox
                        checked={checkboxValues.checkbox4}
                        onChange={handleCheckboxChange}
                        name="checkbox4"
                      />
                    }
                    label="[선택] 이벤트 및 혜택안내 개인정보 수집 · 이용에 동의합니다."
                  />
                  <T className="DetailText">자세히보기</T>
                </Box>

                <FormControlLabel
                  className="Agree"
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
                  className="Agree"
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
            </Box>
          </Box>
        </Box>
        <img className="MobileImg" src={images.Mreservation2} />
      </Box>
    </Container>
  )
}

export default Reservation
