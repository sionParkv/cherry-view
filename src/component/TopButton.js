import { Box, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 300) {
      // 페이지의 스크롤 위치가 일정 값(여기서는 300)을 넘으면 버튼을 표시
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤링 효과 적용
    })
  }
  return (
    <Box>
      {isVisible && (
        <IconButton
          className="TopButton"
          onClick={scrollToTop}
          style={{
            width: '90px',
            height: '90px',
            backgroundColor: '#ffc043',
            position: 'fixed',
            bottom: '50%',
            right: '20px',
            zIndex: '1000',
          }}
        >
          <ArrowUpwardRoundedIcon />
        </IconButton>
      )}
    </Box>
  )
}

export default TopButton
