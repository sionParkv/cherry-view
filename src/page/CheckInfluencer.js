import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography as T,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

import '../assets/CheckInfluencer.scss'
import { components } from '../component/index'
import { images } from '../images/index'

function createData(id, img, title, gender, birth, media) {
  return { id, img, title, gender, birth, media }
}

const rows = [
  createData(1, images.mainImg, '인플루언서 명', '여', '2000', images.naver),
  createData(2, images.mainImg, '인플루언서 명', '여', '2000', images.naver),
  createData(3, images.mainImg, '인플루언서 명', '여', '2000', images.naver),
  createData(4, images.mainImg, '인플루언서 명', '여', '2000', images.naver),
]

const CheckInfluencer = () => {
  const [favoriteStates, setFavoriteStates] = useState(rows.map(() => false))

  const handleToggleFavorite = (index) => {
    setFavoriteStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  return (
    <Container className="CheckInfluencerContainer">
      <components.Header />
      <Box className="CheckInfluencerBox">
        <Box className="CheckInfluencer">
          <T className="MainText">인플루언서를 다시 한 번 확인해주세요</T>
          <T className="SubText">
            인플루언서 선정 확정 시 변경이 불가합니다.
            <br />
            다시 한 번 확인해주세요!
          </T>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">닉네임</TableCell>
                  <TableCell align="center">성별</TableCell>
                  <TableCell align="center">출생연도</TableCell>
                  <TableCell align="center">미디어</TableCell>
                  <TableCell align="center">즐겨찾기</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className="OneCell" component="th" scope="row">
                      <Box className="OneCellBox">
                        <img src={row.img} />
                        <T>{row.title}</T>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <T className="Texts">{row.gender}</T>
                    </TableCell>
                    <TableCell align="center">
                      <T className="Texts">{row.birth}</T>
                    </TableCell>
                    <TableCell align="center">
                      <img className="MediaImg" src={row.media} />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        className="IcoBack"
                        onClick={() => handleToggleFavorite(index)}
                      >
                        <StarIcon
                          style={{
                            color: favoriteStates[index]
                              ? '#ffc032'
                              : 'inherit',
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box className="ButtonBox">
            <Button className="Previous">이전으로</Button>
            <Button className="Completed">선정 확정</Button>
          </Box>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default CheckInfluencer
