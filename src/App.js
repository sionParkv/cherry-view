import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import { pages } from '../src/page/index'
import '../src/assets/common.scss'

function App() {
  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route path="/" element={<pages.MainPage />} />
      {/* <캠페인 디테일 /> */}
      <Route path="/campaign" element={<pages.CampDetail />} />
      {/* <캠페인 신청 /> */}
      <Route path="/submit" element={<pages.SubmitPage />} />
      {/* <캠페인 신청 완료 /> */}
      <Route path="/submitcomplete" element={<pages.SubmitComplete />} />
      {/* <컨텐츠 제출 /> */}
      <Route path="/submitcontents" element={<pages.SubmitContents />} />
      {/* <컨텐츠 제출 완료/> */}
      <Route path="/contentscomplete" element={<pages.ContentsComplete />} />
      {/* <공지사항/> */}
      <Route path="/notice" element={<pages.Notice />} />
      {/* <공지사항/> */}
      <Route path="/faq" element={<pages.FAQ />} />
      {/* <로그인/> */}
      <Route path="/login" element={<pages.Login />} />
      {/* <회원가입/> */}
      <Route path="/join" element={<pages.Join />} />
      {/* <아이디 찾기/> */}
      <Route path="/searchid" element={<pages.SearchID />} />
      {/* <아이디 정보/> */}
      <Route path="/submitid" element={<pages.SubmitID />} />
    </Routes>
  )
}

export default App
