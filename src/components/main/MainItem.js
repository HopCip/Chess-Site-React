import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const MainItem = ({ id, title, buttonText, img, text }) => {
  return (
    <Paper elevation={12} sx={{ paddingY: 2 }}>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            paddingLeft: 2,
            width: '45%',
            minHeight: 300,
          }}
        >
          <img
            src={img}
            alt="chess-puzzle"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box
          sx={{
            width: '55%',
            paddingY: 2,
            paddingX: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Link
            to={`/${buttonText.toLowerCase()}`}
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained" sx={{ marginBottom: 7, marginTop: 4 }}>
              {buttonText}
            </Button>
          </Link>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textAlign: 'justify' }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

export default MainItem
