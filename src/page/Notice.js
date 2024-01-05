/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  Paper,
  Typography as T,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'

import { components } from '../component/index'
import '../assets/Notice.scss'

const posts = [
  // 게시물 데이터
]

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'title', label: '제목', minWidth: 150 },
  { id: 'content', label: '내용', minWidth: 200 },
]

const PostTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="게시물 목록">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align="center"
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id} align="center">
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const Notice = () => {
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
        <T className="MainText">NOTICE</T>
        <TextField
          label="검색"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '20px' }}
        />
        <PostTable
          rows={rows.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Container>
  )
}

export default Notice
