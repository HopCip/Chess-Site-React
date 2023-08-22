import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import lekcieData from './lekcieData'
import LekcieItem from './LekcieItem'
import Categories from './Categories'

const allCategories = [
  'Všetky',
  ...new Set(lekcieData.map((lekcia) => lekcia.category)),
]

const Lekcie = () => {
  const [menuItems, setMenuItems] = useState(lekcieData)
  const [categories, setCategories] = useState(allCategories)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPage, setSelectedPage] = useState(1)
  const itemsPerPage = 6

  const displayItems = menuItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const filterItems = (category) => {
    if (category === 'Všetky') {
      setMenuItems(lekcieData)
    } else {
      const newItems = lekcieData.filter(
        (lekcia) => lekcia.category === category
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

  function getCategoryButtonColor(category) {
    switch (category.toLowerCase()) {
      case 'pešiakové':
        return 'purple'
      case 'strelcové':
        return 'silver'
      case 'vežové':
        return 'brown'
      case 'jazdcové':
        return 'black'
      case 'dámové':
        return 'pink'
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
          Šachové lekcie
        </Typography>
        <Categories
          categories={categories}
          filterItems={filterItems}
          setCurrentPage={setCurrentPage}
          getCategoryButtonColor={getCategoryButtonColor}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {displayItems.map((one) => {
              return (
                <Grid key={one.id} item xs={12}>
                  <LekcieItem
                    {...one}
                    elevation={3}
                    getCategoryButtonColor={getCategoryButtonColor}
                  />
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

export default Lekcie
