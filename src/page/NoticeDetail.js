import React from 'react'
import { Container, Box, Typography as T, IconButton } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MenuIcon from '@mui/icons-material/Menu'

import '../assets/NoticeDetail.scss'
import { components } from '../component/index'
import { images } from '../images/index'

const NoticeDetail = () => {
  return (
    <Container className="NoticeDetailContainer">
      <components.Header />
      <Box className="Display">
        <Box className="NoticeDetailBox">
          <Box className="TitleBox">
            <T>Lorem ipsum dolor sit amet, consectetur adipiscing elit</T>
            <T>2023.11.30</T>
          </Box>
          <Box className="ContentBox">
            <T>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
              <br />
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse
              <br />
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,
              <br />
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </T>
            <img src={images.content1} />
            <T className="BoldText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </T>
            <img src={images.content2} />
            <T>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
              <br />
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse
              <br />
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,
              <br />
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </T>
          </Box>
          <Box className="FileBox">
            <Box className="First">
              <FolderIcon />
              <T>체리뷰 이용약관.pdf</T>
            </Box>
            <FileDownloadIcon />
          </Box>
          <Box className="NextBox">
            <Box className="NextTitle">
              <KeyboardArrowUpIcon />
              <T className="Next">이전글</T>
              <T className="Content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </T>
            </Box>
            <Box className="NextSection" />
            <Box className="NextTitle">
              <KeyboardArrowDownIcon />
              <T className="Next">다음글</T>
              <T className="Content">
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </T>
            </Box>
          </Box>
          <IconButton className="MenuButton">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default NoticeDetail
