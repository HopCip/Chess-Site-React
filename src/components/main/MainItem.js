import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

theme.typography.h4 = {
  fontSize: '1.4rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}

const MainItem = ({ id, title, buttonText, img, text }) => {
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
              md: '50%',
              lg: '50%',
              xl: '50%',
            },
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
            width: {
              xs: '100%',
              sm: '100%',
              md: '50%',
              lg: '50%',
              xl: '50%',
            },
            paddingY: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 },
            paddingX: { xs: 2, sm: 2, md: 4, lg: 4, xl: 4 },
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
          </ThemeProvider>
          <Link
            to={`/${buttonText.toLowerCase()}`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              sx={{
                marginBottom: { xs: 3, sm: 3, md: 5, lg: 7, xl: 7 },
                marginTop: { xs: 2, sm: 2, md: 3, lg: 4, xl: 4 },
              }}
            >
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
