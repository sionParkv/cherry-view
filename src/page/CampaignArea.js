import React, { useState } from 'react'
import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography as T,
} from '@mui/material'

import '../assets/CampaginProduct.scss'
import { components } from '../component/index'
import { images } from '../images/index'
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps'

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

const CampaginArea = () => {
  const navermaps = useNavermaps()

  const [type, setType] = useState(0)

  const handleChange = (event) => {
    setType(event.target.value)
  }
  return (
    <Container className="ProductContainer">
      <components.Header />
      <components.TopButton />
      <Box className="Display">
        <Box className="CampaginProduct">
          <MapDiv className="MapBox">
            <NaverMap
              defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
              defaultZoom={10}
            >
              <Marker
                defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
              />
            </NaverMap>
          </MapDiv>
          <Box className="TopBox">
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
              {items.map((item, index) => (
                <Box className="Category" key={index}>
                  {/* 이미지 파일 객체를 가져와 이미지를 렌더링 */}
                  <img src={imageItem[`item${index + 1}`]} alt={item} />
                  <T>{item}</T>
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="SectionBox">
            <Box className="SnsBox">
              <Box>all</Box>
              <img src={images.naver} />
              <img src={images.insta} />
              <img src={images.youtube} />
            </Box>
            <Box className="DetailBox">
              <T>최신순</T>
              <Box className="Section" />
              <T>마감순</T>
              <Box className="Section" />
              <T>인원순</T>
            </Box>
          </Box>
          <Box className="CardPage">
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
          <Stack spacing={2} className="Paginations">
            <Pagination count={5} />
          </Stack>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default CampaginArea
