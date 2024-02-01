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
      {/* <인증번호 안내/> */}
      <Route path="/certifinumber" element={<pages.CertifiNumber />} />
      {/* <비밀번호 찾기/> */}
      <Route path="/searchpass" element={<pages.SearchPass />} />
      {/* <비밀번호 변경/> */}
      <Route path="/changepass" element={<pages.ChangePass />} />
      {/* <마이페이지/> */}
      <Route path="/mypage" element={<pages.MyPage />} />
      {/* <알림페이지/> */}
      <Route path="/alarmpage" element={<pages.AlarmPage />} />
      {/* <프리미어/> */}
      <Route path="/premier" element={<pages.Premier />} />
      {/* <광고주 페이지/> */}
      <Route path="/ownerpage" element={<pages.OwnerPage />} />
      {/* <새 캠페인 등록/> */}
      <Route path="/newcampaign" element={<pages.NewCampaign />} />
      {/* <인플루언서 체크/> */}
      <Route path="/checkinfluencer" element={<pages.CheckInfluencer />} />
      {/* <인플루언서 완료/> */}
      <Route
        path="/completedinfluencer"
        element={<pages.CompletedInfluencer />}
      />
      {/* <미션검수 페이지/> */}
      <Route path="/missioninspection" element={<pages.MissonInspection />} />
      {/* <공지사항 상세 페이지/> */}
      <Route path="/noticedetail" element={<pages.NoticeDetail />} />
      {/* <커뮤니티 상세 페이지/> */}
      <Route path="/communitydetail" element={<pages.CommunityDetail />} />
      {/* <커뮤니티 페이지/> */}
      <Route path="/community" element={<pages.Community />} />
      {/* <캠페인 리스트(제품)/> */}
      <Route path="/product" element={<pages.CampaginProduct />} />
      {/* <캠페인 리스트(지역)/> */}
      <Route path="/area" element={<pages.CampaginArea />} />
      {/* <추천 페이지/> */}
      <Route path="/suggestion" element={<pages.Suggestion />} />
      {/* <신청 리스트 페이지/> */}
      <Route path="/applicationlist" element={<pages.ApplicationList />} />
      {/* <이벤트 페이지/> */}
      <Route path="/reservation" element={<pages.Reservation />} />
      {/* <이벤트 완료 페이지/> */}
      <Route
        path="/reservationsuccess"
        element={<pages.ReservationSuccess />}
      />
    </Routes>
  )
}

export default App
