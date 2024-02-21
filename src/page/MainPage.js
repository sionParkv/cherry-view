/* eslint-disable no-irregular-whitespace */
import * as React from 'react'
import {
  Box,
  Container,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography as T,
} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import '../assets/MainPage.scss'
import { images } from '../images/index'
import { useState } from 'react'
import { components } from '../component/index'
import { useNavigate } from 'react-router-dom'

const imageItem = {
  item1: images.cate1,
  item2: images.cate2,
  item3: images.cate3,
  item4: images.cate4,
  item5: images.cate5,
  item6: images.cate6,
  item7: images.cate7,
  item8: images.cate5,
  item9: images.cate9,
  item10: images.cate10,
  item11: images.cate11,
  item12: images.cate12,
  item13: images.cate13,
  item14: images.cate14,
  item15: images.cate15,
  item16: images.cate16,
  item17: images.cate17,
}
const itemsByType = [
  ['생활', '서비스', '유아동', '디지털', '뷰티', '패션'], // 제품캠페인
  ['맛집', '뷰티', '숙박', '문화', '배달', '테이크아웃'], // 지역캠페인
  ['반려동물', '도서', '식품', '기타', '프리미어'], // 기타서비스
]

const cardData = [
  {
    id: 1,
    imageSrc: images.mainImg1,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.youtube,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 2,
    imageSrc: images.mainImg2,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 3,
    imageSrc: images.mainImg3,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.insta,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 4,
    imageSrc: images.mainImg4,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.youtube,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 5,
    imageSrc: images.mainImg1,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 6,
    imageSrc: images.mainImg2,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.insta,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 7,
    imageSrc: images.mainImg3,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.youtube,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 8,
    imageSrc: images.mainImg4,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 9,
    imageSrc: images.mainImg1,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
  {
    id: 10,
    imageSrc: images.mainImg2,
    title: '수제한방 모란꽃차',
    description: '#배송 #백설 #수제한방차',
    snsImage: images.naver,
    person: '모집 20명',
    dday: 'd-4',
  },
]

const MainPage = () => {
  const navigate = useNavigate()

  const goToCampaign = () => {
    navigate('/campaign')
  }
  const goToProduct = () => {
    navigate('/product')
  }
  const goToMy = () => {
    navigate('/mypage')
  }
  const goToOwner = () => {
    navigate('/ownerpage')
  }
  const [type, setType] = useState(0)

  const handleChange = (event) => {
    setType(event.target.value)
  }

  // const responsive = {
  //   0: { items: 1 },
  //   568: { items: 2 },
  //   1024: { items: 3 },
  // }

  // const carouselItems = [
  //   {
  //     id: 1,
  //     imageSrc: images.carousel3,
  //   },
  //   {
  //     id: 2,
  //     imageSrc: images.carousel1,
  //   },
  //   {
  //     id: 3,
  //     imageSrc: images.carousel2,
  //   },
  // ]

  // const renderCarouselItems = () =>
  //   carouselItems.map((item) => (
  //     <div
  //       key={item.id}
  //       onClick={
  //         item.id === 1
  //           ? goToMy
  //           : item.id === 2
  //             ? goToOwner
  //             : item.id === 3
  //               ? goToCampaign
  //               : undefined
  //       }
  //     >
  //       <img src={item.imageSrc} alt={`Image ${item.id}`} />
  //     </div>
  //   ))
  return (
    <Container className="MainContainer">
      <components.TopButton />
      <components.Header />
      <Box className="Display">
        <Box className="MainBox">
          <Box className="CarouselBox">
            {/* <AliceCarousel
              mouseTracking
              items={renderCarouselItems()}
              responsive={responsive}
              controlsStrategy="alternate"
            /> */}
            <Box className="ImsiImg">
              <img onClick={goToMy} src={images.carousel3} />
              <img onClick={goToOwner} src={images.carousel1} />
              <img src={images.carousel2} />
            </Box>
            <Box className="ImsiBox">
              <Box className="ImsiOne">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </Box>
              <Box className="ImsiTwo">
                <IconButton>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <T className="MainText">
            체리뷰에 찾으시는<br></br>캠페인이 있으신가요?
          </T>
          <Box className="CategoryBox">
            <FormControl>
              <Select
                className="SelectBox"
                value={type}
                onChange={handleChange}
              >
                <MenuItem value={0}>전체</MenuItem>
                <MenuItem value={1}>지역캠페인</MenuItem>
                <MenuItem value={2}>제품캠페인</MenuItem>
                <MenuItem value={3}>기자단캠페인</MenuItem>
              </Select>
            </FormControl>

            <Box className="SmallCategory">
              {(type === 0 ? itemsByType.flat() : itemsByType[type - 1])?.map(
                (item, index) => (
                  <Box onClick={goToProduct} key={index}>
                    <img src={imageItem[`item${index + 1}`]} alt={item} />
                    {item}
                  </Box>
                )
              )}
            </Box>
          </Box>
          <Box className="MiddleCategory">
            <Box className="MiddleBox">
              <T className="MiddleText">
                체리뷰에 찾으시는<br></br>인기있는 캠페인
              </T>
              <T className="Text">
                현재 가장 인기있는 캠페인을 신청해보세요<br></br>선정되시면
                알람으로 알려드립니다.
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
                <Box onClick={goToCampaign} className="CardBox" key={card.id}>
                  <components.MainCard
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
                <Box onClick={goToCampaign} className="CardBox" key={card.id}>
                  <components.MainCard
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
              <Box onClick={goToCampaign} className="CardBox" key={card.id}>
                <components.MainCard
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
          <img src={images.mainBottom} className="BottomImg"></img>
        </Box>
        {/* 모바일 */}
        <Box className="MobileBox">
          <Box className="CarouselBox">
            {/* <AliceCarousel
              mouseTracking
              items={itemsBox}
              responsive={responsive}
              controlsStrategy="alternate"
            /> */}
          </Box>
          <T className="MainText">
            체리뷰에 찾으시는<br></br>캠페인이 있으신가요?
          </T>
          <Box className="CategoryBox">
            <FormControl>
              <Select
                className="SelectBox"
                value={type}
                onChange={handleChange}
              >
                <MenuItem value={0}>전체</MenuItem>
                <MenuItem value={1}>지역캠페인</MenuItem>
                <MenuItem value={2}>제품캠페인</MenuItem>
                <MenuItem value={3}>기자단캠페인</MenuItem>
                <MenuItem value={4}>프리미어</MenuItem>
              </Select>
            </FormControl>

            <Box className="SmallCategory">
              {(type === 0 ? itemsByType.flat() : itemsByType[type - 1])?.map(
                (item, index) => (
                  <Box onClick={goToCampaign} key={index}>
                    <img src={imageItem[`item${index + 1}`]} alt={item} />
                    {item}
                  </Box>
                )
              )}
            </Box>
          </Box>
          <Box className="MiddleCategory">
            <Box className="MiddleBox">
              <T className="MiddleText">
                체리뷰에 찾으시는<br></br>인기있는 캠페인
              </T>
              <T className="Text">
                현재 가장 인기있는 캠페인을 신청해보세요<br></br>선정되시면
                알람으로 알려드립니다.
              </T>
              <T className="MoreText">
                더 많은 캠페인 보기
                <ArrowForwardIosIcon />
              </T>
              <Box className="TagBox">
                <Box># 마감임박</Box>
                <Box># 베스트 캠페인</Box>
                <Box># 12월 베스트</Box>
                <Box># 20명 이상 모집</Box>
              </Box>
            </Box>
            <Box className="CardPage">
              {cardData.map((card) => (
                <Box onClick={goToProduct} className="CardBox" key={card.id}>
                  <components.MainCard
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
              <Box className="TagBox">
                <Box># 마감임박</Box>
                <Box># 베스트 캠페인</Box>
                <Box># 12월 베스트</Box>
                <Box># 20명 이상 모집</Box>
              </Box>
            </Box>
            <Box className="CardPage">
              {cardData.map((card) => (
                <Box onClick={goToCampaign} className="CardBox" key={card.id}>
                  <components.MainCard
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
          {/* 하단 리스트 */}
          <Box className="BottomCard">
            {cardData.map((card) => (
              <Box className="CardBox" key={card.id}>
                <components.MainCard
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
          <img src={images.mainBottom} className="BottomImg"></img>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default MainPage
