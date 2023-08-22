import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PuzzleItem from './PuzzleItem.js'
import puzzleData from './puzzleData.js'
import Difficulties from './Difficulties.js'
import Pagination from '@mui/material/Pagination'

const allDifficulties = [
  'Všetky',
  ...new Set(puzzleData.map((lekcia) => lekcia.difficulty)),
]

const Diagramy = () => {
  const [menuItems, setMenuItems] = useState(puzzleData)
  const [difficulties, setDifficilties] = useState(allDifficulties)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPage, setSelectedPage] = useState(1)
  const itemsPerPage = 6

  const displayItems = menuItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const filterItems = (difficulty) => {
    if (difficulty === 'Všetky') {
      setMenuItems(puzzleData)
    } else {
      const newItems = puzzleData.filter(
        (lekcia) => lekcia.difficulty === difficulty
      )
      setMenuItems(newItems)
    }
    setCurrentPage(1)
    setSelectedPage(1)
    scrollToTop()
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
    setSelectedPage(value)
    scrollToTop()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
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
        return 'blue'
    }
  }

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: 'center', paddingY: 4 }}
        >
          Zlepšuj sa v taktike
        </Typography>
        <Difficulties
          difficulties={difficulties}
          filterItems={filterItems}
          setCurrentPage={setCurrentPage}
          getDifficultyButtonColor={getDifficultyButtonColor}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {displayItems.map((one) => {
              return (
                <Grid key={one.id} item xs={6}>
                  <PuzzleItem {...one} elevation={2} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
        <Pagination
          count={Math.ceil(menuItems.length / itemsPerPage)}
          color="primary"
          onChange={handlePageChange}
          page={selectedPage}
        />
      </Box>
    </Container>
  )
}

export default Diagramy
