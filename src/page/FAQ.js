/* eslint-disable react/prop-types */
import {
  Box,
  Collapse,
  Container,
  IconButton,
  Pagination,
  Stack,
  Typography as T,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { components } from '../component/index'
import '../assets/FAQ.scss'

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

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // 검색어와 일치하는 항목 필터링
  const filteredInfoTexts = infoTexts.filter((item) => {
    return item.text.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const [expandedItems, setExpandedItems] = useState([])

  const handleToggle = (itemId) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(itemId)) {
        return prevExpandedItems.filter((id) => id !== itemId)
      } else {
        return [...prevExpandedItems, itemId]
      }
    })
  }

  return (
    <Container className="NoticeContainer">
      <components.Header />
      <Box className="Display">
        <Box className="NoticeBox">
          <T className="MainText">FAQ</T>
          <Box className="SearchBox">
            <T>자주묻는 질문</T>
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
            {/* 검색 결과에 따라 필터링된 항목만 반복하여 렌더링 */}
            <Box>
              {filteredInfoTexts.map((item) => (
                <React.Fragment key={item.id}>
                  <Box className="InfoTextBox2">
                    <Box className="DateBox">Q</Box>
                    <T className="AlarmText">{item.text}</T>
                    {expandedItems.includes(item.id) ? (
                      <KeyboardArrowUpIcon
                        onClick={() => handleToggle(item.id)}
                        variant="contained"
                        color="primary"
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        onClick={() => handleToggle(item.id)}
                        variant="contained"
                        color="primary"
                      />
                    )}
                  </Box>
                  <Collapse
                    key={`collapse-${item.id}`}
                    in={expandedItems.includes(item.id)}
                    unmountOnExit
                  >
                    <Box>A</Box>
                    <T>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <br />
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. <br />
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </T>
                  </Collapse>
                </React.Fragment>
              ))}
            </Box>

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
        <Box className="MobileBox">
          <T className="MainText">FAQ</T>
          <T className="SubText">자주묻는 질문</T>
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

          <Box className="InfoBox">
            {/* 검색 결과에 따라 필터링된 항목만 반복하여 렌더링 */}
            <Box>
              {filteredInfoTexts.map((item) => (
                <React.Fragment key={item.id}>
                  <Box className="InfoTextBox">
                    <Box className="DateBox">Q</Box>
                    <T className="AlarmText">{item.text}</T>
                    {expandedItems.includes(item.id) ? (
                      <KeyboardArrowUpIcon
                        onClick={() => handleToggle(item.id)}
                        variant="contained"
                        color="primary"
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        onClick={() => handleToggle(item.id)}
                        variant="contained"
                        color="primary"
                      />
                    )}
                  </Box>
                  <Collapse
                    key={`collapse-${item.id}`}
                    in={expandedItems.includes(item.id)}
                    unmountOnExit
                  >
                    <Box>A</Box>
                    <T>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <br />
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. <br />
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </T>
                  </Collapse>
                </React.Fragment>
              ))}
            </Box>

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

export default FAQ
