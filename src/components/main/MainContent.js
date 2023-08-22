import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MainItem from './MainItem'
import Citat from '../Citat/Citat'
import data from './data.js'

const MainContent = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: 8 }}>
      <Box>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: 'center', paddingY: 4 }}
        >
          Nauč sa s nami šachy!
        </Typography>
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
