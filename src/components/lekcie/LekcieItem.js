import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const LekcieItem = ({ getCategoryButtonColor, ...one }) => {
  return (
    <Paper elevation={12} sx={{ paddingY: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: 2,
            paddingRight: {
              xs: 2,
              sm: 2,
              md: 0,
              lg: 0,
              xl: 0,
            },
            width: {
              xs: '100%',
              sm: '100%',
              md: '45%',
              lg: '45%',
              xl: '45%',
            },
            minHeight: 300,
          }}
        >
          <img
            src={one.img}
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
            width: {
              xs: '100%',
              sm: '100%',
              md: '45%',
              lg: '45%',
              xl: '45%',
            },
            paddingY: 2,
            paddingX: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            {one.title}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginBottom: 7,
              marginTop: 4,
              marginRight: 2,
              backgroundColor: getCategoryButtonColor(one.category),
              '&:hover': {
                backgroundColor: getCategoryButtonColor(one.category),
              },
            }}
          >
            {one.category}
          </Button>
          <Button
            variant="contained"
            sx={{
              marginBottom: 7,
              marginTop: 4,
              backgroundColor: getDifficultyButtonColor(one.difficulty),
              '&:hover': {
                backgroundColor: getDifficultyButtonColor(one.difficulty),
              },
            }}
          >
            {one.difficulty}
          </Button>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textAlign: 'justify' }}
          >
            {one.text}
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

function getDifficultyButtonColor(difficulty) {
  switch (difficulty.toLowerCase()) {
    case 'ľahké':
      return 'green'
    case 'stredné':
      return 'orange'
    case 'ťažké':
      return 'red'
    default:
      return 'inherit'
  }
}

export default LekcieItem
