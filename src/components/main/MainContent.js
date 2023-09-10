import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MainItem from './MainItem'
import Citat from '../Citat/Citat'
import data from './data.js'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

theme.typography.h2 = {
  fontSize: '1.8rem',
  '@media (min-width:600px)': {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem',
  },
}

const MainContent = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: 8 }}>
      <Box>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ textAlign: 'center', paddingY: 4 }}
          >
            Nauč sa s nami šachy!
          </Typography>
        </ThemeProvider>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {data.map((one) => {
              return (
                <Grid key={one.id} item xs={12}>
                  <MainItem {...one} elevation={3} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ marginTop: 14 }}>
        <Citat></Citat>
      </Box>
    </Container>
  )
}

export default MainContent
