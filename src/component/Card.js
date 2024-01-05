import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Container, Typography as T } from '@mui/material'

import '../assets/Card.scss'

// eslint-disable-next-line react/prop-types
const MainCard = ({ imageSrc, title, description, snsImage, person, dday }) => {
  return (
    <Container>
      <Card className="MainCard">
        <CardMedia component="img" image={imageSrc} alt="Image" />
        <CardContent>
          <Typography
            className="Title"
            gutterBottom
            variant="Fh5"
            component="div"
          >
            {title}
          </Typography>
          <Typography className="Tag" variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardContent className="SnsText">
          <img src={snsImage} alt="sns"></img>
          <T>{person}</T>
          <Box />
          <T>{dday}</T>
        </CardContent>
      </Card>
    </Container>
  )
}

export default MainCard
