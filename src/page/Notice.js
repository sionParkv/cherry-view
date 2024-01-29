/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  IconButton,
  Pagination,
  Stack,
  Typography as T,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'

import { components } from '../component/index'
import '../assets/Notice.scss'

const infoTexts = [
  {
    id: 1,
    date1: '01',
    date2: '23.05',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
  },
  {
    id: 2,
    date1: '01',
    date2: '23.05',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
  },
  {
    id: 3,
    date1: '01',
    date2: '23.05',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
  },
  {
    id: 4,
    date1: '01',
    date2: '23.05',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
  },
  {
    id: 5,
    date1: '01',
    date2: '23.05',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...',
  },
]

const Notice = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // 검색어와 일치하는 항목 필터링
  const filteredInfoTexts = infoTexts.filter((item) => {
    return item.text.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <Container className="NoticeContainer">
      <components.Header />
      <Box className="Display">
        <Box className="NoticeBox">
          <T className="MainText">NOTICE</T>
          <Box className="SearchBox">
            <T>공지사항</T>
            <TextField
              placeholder="검색어를 입력하세요."
              InputProps={{
                endAdornment: (
                  <IconButton className="SearchButton">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
              // TextField 값이 변경될 때마다 setSearchTerm으로 검색어 업데이트
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>

          <Box className="InfoBox">
            <Box className="TopAlarmBox">
              <IconButton className="AlarmButton">
                <NotificationsIcon />
              </IconButton>
              <T className="AlarmText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm...
              </T>
              <AddIcon className="AddIcon" />
            </Box>

            {/* 검색 결과에 따라 필터링된 항목만 반복하여 렌더링 */}
            {filteredInfoTexts.map((item) => (
              <Box key={item.id} className="InfoTextBox">
                <Box className="DateBox">
                  <T>{item.date1}</T>
                  <T>{item.date2}</T>
                </Box>
                <T className="AlarmText">{item.text}</T>
                <AddIcon className="AddIcon" />
              </Box>
            ))}
            {/* 만약 검색 결과가 없다면 메시지를 표시할 수 있습니다. */}
            {filteredInfoTexts.length === 0 && (
              <Box className="NoResultsMessage">
                <T>검색 결과가 없습니다.</T>
              </Box>
            )}
            <Box className="FaqButton">
              <Stack spacing={2} className="Paginations">
                <Pagination count={5} />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      <components.Footer />
    </Container>
  )
}

export default Notice
