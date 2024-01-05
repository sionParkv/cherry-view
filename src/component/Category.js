import { Box, Container, Typography as T } from '@mui/material'
import React from 'react'
// import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import '../assets/Category.scss'
import MainCard from './Card'
import { images } from '../images'
import { components } from '.'

const imageItem = {
  item1: images.cate1,
  item2: images.cate2,
  item3: images.cate3,
  item4: images.cate4,
  item5: images.cate5,
  item6: images.cate6,
  item7: images.cate7,
  item8: images.cate8,
  item9: images.cate9,
  item10: images.cate10,
  item11: images.cate11,
  item12: images.cate12,
  item13: images.cate13,
  item14: images.cate14,
}
const items = [
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
  '프리미어',
  '도서',
  '이용가이드',
]

const cardData = [
  {
    id: 1,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.youtube,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 2,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 3,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.insta,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 4,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.youtube,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 5,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 6,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.insta,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 7,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.youtube,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 8,
    imageSrc: images.tea,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
]

const Category = () => {
  return (
    <Container className="Category">
      <T className="MainText">
        체리뷰에 찾으시는<br></br>캠페인이 있으신가요?
      </T>
      <Box className="CategoryBox">
        <components.MainSelect />

        <Box className="SmallCategory">
          {items.map((item, index) => (
            <Box key={index}>
              {/* 이미지 파일 객체를 가져와 이미지를 렌더링 */}
              <img src={imageItem[`item${index + 1}`]} alt={item} />
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="MiddleCategory">
        <Box className="MiddleBox">
          <T className="MiddleText">
            체리뷰에 찾으시는<br></br>인기있는 캠페인
          </T>
          <T className="Text">
            현재 가장 인기있는 캠페인을 신청해보세요<br></br>선정되시면 알람으로
            알려드립니다.
          </T>
          <T className="MoreText">
            더 많은 캠페인 보기
            <ArrowForwardIosIcon />
          </T>
          <Box># 마감임박</Box>
          <Box># 베스트 캠페인</Box>
          <Box># 12월 베스트</Box>
          <Box># 20명 이상 모집</Box>
        </Box>
        <Box className="CardPage">
          {cardData.map((card) => (
            <Box className="CardBox" key={card.id}>
              <MainCard
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                snsImage={card.snsImage}
                person={card.person}
                dday={card.dday}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="LastCategory">
        <Box className="LastBox">
          <T className="LastText">
            추운 겨울,<br></br>하고싶은 캠페인
          </T>
          <T className="Text">
            겨울 지금 딱 하기 좋은 캠페인을<br></br>체리뷰 MD가 모아왔어요.
          </T>
          <T className="MoreText">
            더 많은 캠페인 보기
            <ArrowForwardIosIcon />
          </T>
          <Box># 겨울맞춤</Box>
          <Box># 따뜻한 겨울</Box>
          <Box># 12월 베스트</Box>
          <Box># 20명 이상 모집</Box>
        </Box>
        <Box className="CardPage">
          {cardData.map((card) => (
            <Box className="CardBox" key={card.id}>
              <MainCard
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                snsImage={card.snsImage}
                person={card.person}
                dday={card.dday}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="Section" />
      {/* 하단 리스트 */}
      <Box className="BottomCard">
        {cardData.map((card) => (
          <Box className="CardBox" key={card.id}>
            <MainCard
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              snsImage={card.snsImage}
              person={card.person}
              dday={card.dday}
            />
          </Box>
        ))}
      </Box>
      {/* 더많은 캠페인 */}
      <Box className="BottomImg"></Box>
    </Container>
  )
}

export default Category
