/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  IconButton,
  Paper,
  Typography as T,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

import { components } from '../component/index'
import '../assets/FAQ.scss'

///////////////
const posts = [
  {
    title: '첫 번째 게시물',
    content: '이것은 첫 번째 게시물입니다.',
  },
  {
    title: '두 번째 게시물',
    content: '두 번째 게시물의 내용입니다.',
  },
]

const columns = [
  { id: 'title', label: '제목' },
  { id: 'content', label: '내용' },
]

const PostTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>{row[column.id]}</TableCell>
              ))}
              <TableCell>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const FAQ = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5) // 페이지당 행 수
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    setPage(0)
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const rows = filteredPosts.map((post, index) => ({ id: index + 1, ...post }))

  return (
    <Container className="NoticeContainer">
      <components.Header />
      <Box className="NoticeBox">
        <T className="MainText">FAQ</T>
        <Box className="SearchBox">
          <T>공지사항</T>
          <TextField
            label="검색어를 입력하세요."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Box>

        <PostTable
          rows={rows.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
        />
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

      <components.Footer />
    </Container>
  )
}

export default FAQ
