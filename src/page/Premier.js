import { Box, Container, Typography as T } from '@mui/material'
import React from 'react'

import { components } from '../component/index'
import { images } from '../images/index'
import '../assets/Premier.scss'

const Premier = () => {
  return (
    <Container className="PremierContainer">
      <components.Header />
      <Box className="BasicBox">
        <T className="MainText">PREMIER</T>
        <T className="SubText">
          기존 캠페인에서 한 단계 나아가, 전문성과 영향력이 검증된 회원들을 위한
          캠페인 프로그램입니다.
          <br />
          블로거와 인스타그래머, 네이버 인플루언서까지 다양하게 신청가능한
          PREMIER를 만나보세요.{' '}
        </T>
        <Box className="ImgBox">
          <Box>
            <img className="Premier1" src={images.premier1} />
            <Box className="TextBox">
              <T className="ImgMainText">프리미어 전용 캠페인</T>
              <Box className="ImgSection" />
              <T className="ImgSubText">
                프리미어 전용 캠페인
                <br />
                참여 기회
              </T>
            </Box>
          </Box>
          <Box>
            <img className="Premier2" src={images.premier2} />
            <Box className="TextBox">
              <T className="ImgMainText">제품 제공 및 원고료</T>
              <Box className="ImgSection" />
              <T className="ImgSubText">
                캠페인 제공내역 및<br />
                원고료 지급
              </T>
            </Box>
          </Box>
          <Box>
            <img className="Premier3" src={images.premier3} />
            <Box className="TextBox">
              <T className="ImgMainText">최대 3개의 자격 취득</T>
              <Box className="ImgSection" />
              <T className="ImgSubText">
                최대 3개의 프리미어
                <br />
                자격을 부여
              </T>
            </Box>
          </Box>
          <Box>
            <img className="Premier4" src={images.premier4} />
            <Box className="TextBox">
              <T className="ImgMainText">프리미어 전용 위젯</T>
              <Box className="ImgSection" />
              <T className="ImgSubText">
                프리미어 회원을 위한
                <br />
                위젯 제공
              </T>
            </Box>
          </Box>
          <Box>
            <img className="Premier5" src={images.premier5} />
            <Box className="TextBox">
              <T className="ImgMainText">프리미어 베네핏</T>
              <Box className="ImgSection" />
              <T className="ImgSubText">
                초청 행사 및 교육 프로그램
                <br />
                참여 기회 우선 제공
              </T>
            </Box>
          </Box>
        </Box>
        <Box className="BottomSection">
          <T className="BottomText">
            더 많은 인플루언서들이 각자의 주력 미디어에 맞춰 신청가능하도록
            프리미어 종류가 3가지로 확대되었습니다.
            <br />
            모든 프리미어는 체리뷰 내부 심사를 거치게 되며, 콘텐츠의 퀄리티와
            미디어 영향력 등을 심사합니다.
          </T>
          <Box className="AllBox">
            <Box className="AllContents">
              <Box className="LeftContents">
                <img src={images.naver} />
                <Box className="LeftTextBox">
                  <T>블로그 프리미어</T>
                  <T>네이버 블로그를 운영하고 계신 회원님에게 추천!</T>
                  <T>
                    양질의 콘텐츠 퀄리티와 주력 카테고리의 전문성을
                    <br />
                    보유하고 계신 회원님께 알맞은 프리미어 프로그램
                  </T>
                </Box>
              </Box>

              <Box className="RightContents">
                <Box className="RightTextBox">
                  <T>신청조건</T>
                  <T>
                    네이버 블로그 일 방문자 수 3,000명 이상의 <br />
                    연예 및 단순 이슈가 아닌 주제를 가지고 블로그를 운영중인
                    체리뷰 회원
                  </T>
                </Box>
                <Box className="Submit">신청</Box>
              </Box>
            </Box>
            <Box className="AllContents">
              <Box className="LeftContents">
                <img src={images.insta} />
                <Box className="LeftTextBox">
                  <T>인스타그램 프리미어</T>
                  <T>인스타그램을 운영하고 계신 회원님에게 추천!</T>
                  <T>
                    감각적인 사진으로 나만의 특색있는 콘텐츠 작성
                    <br />
                    능력을 보유하고 계신 회원님께 알맞은 프리미어 프로그램
                  </T>
                </Box>
              </Box>

              <Box className="RightContents">
                <Box className="RightTextBox">
                  <T>신청조건</T>
                  <T>
                    팔로워 수 5만명 이상의 연예 및 단순 이슈가
                    <br />
                    아닌 주제를 가지고 인스타그램을 운영중인 체리뷰 회원
                  </T>
                </Box>
                <Box className="Submit">연결</Box>
              </Box>
            </Box>
            <Box className="AllContents">
              <Box className="LeftContents">
                <img src={images.naverMain} />
                <Box className="LeftTextBox">
                  <T>네이버 인플루언서 프리미어</T>
                  <T>네이버 인플루언서 회원님에게 추천!</T>
                  <T>
                    네이버 인플루언서로 선정되어 활동하고 있는
                    <br />
                    회원님께 알맞은 프리미어 프로그램
                  </T>
                </Box>
              </Box>

              <Box className="RightContents">
                <Box className="RightTextBox">
                  <T>신청조건</T>
                  <T>
                    네이버 포털사이트에 인플루언서 자격을 획득
                    <br />
                    하여, 네이버 인플루언서 전용 홈이 개설되어 있는 체리뷰 회원
                  </T>
                </Box>
                <Box className="Submit">완료</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default Premier
