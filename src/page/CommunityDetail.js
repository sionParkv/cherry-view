import React from 'react'
import {
  Container,
  Box,
  Typography as T,
  IconButton,
  TextField,
  Button,
} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MenuIcon from '@mui/icons-material/Menu'
import SmsIcon from '@mui/icons-material/Sms'

import '../assets/NoticeDetail.scss'
import { components } from '../component/index'
import { images } from '../images/index'

const comments = [
  {
    author: '인플루언서 명',
    date: '12.27 13:35',
    content:
      '개인정보를 포함하거나 혐오나 차별·비난 등 표현, 광고·홍보·상업적·사기 등의 부적절하거나 불법적인 댓글의 등록을 금지합니다.',
    userPicture: images.userPictuer,
  },
]

const CommunityDetail = () => {
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
          <Box className="CommentBox">
            <Box className="MainText">
              <T>댓글</T>
              <KeyboardArrowDownIcon />
            </Box>
            <TextField
              InputProps={{
                startAdornment: <SmsIcon />,
              }}
              placeholder="로그인 후 댓글을 남겨주세요."
            />
            <Box className="CommentInfo">
              개인정보를 포함하거나 혐오나 차별·비난 등 표현,
              광고·홍보·상업적·사기 등의 부적절하거나 불법적인 댓글의 등록을
              금지합니다.
            </Box>
            <TextField
              multiline
              InputProps={{
                endAdornment: (
                  <Box className="CommentButton">
                    <Button className="Cancle">취소</Button>
                    <Button className="Submit">등록</Button>
                  </Box>
                ),
              }}
              placeholder="댓글을 작성해주세요."
            />
            <Box className="CommentInfo">
              개인정보를 포함하거나 혐오나 차별·비난 등 표현,
              광고·홍보·상업적·사기 등의 부적절하거나 불법적인 댓글의 등록을
              금지합니다.
            </Box>
          </Box>
          <Box className="CommentBox2">
            {comments.map((comment, index) => (
              <Box
                key={index}
                className="RealComment"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <img src={comment.userPicture} alt="User" />
                <Box className="RealComment2" sx={{ marginLeft: 2 }}>
                  <Box className="InfoBox">
                    <T variant="body1">{comment.author}</T>
                    <T variant="body2">{comment.date}</T>
                  </Box>
                  <T className="RealComment3" variant="body1">
                    {comment.content}
                  </T>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <components.Footer />
    </Container>
  )
}

export default CommunityDetail
