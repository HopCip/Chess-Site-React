import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Categories = ({
  categories,
  filterItems,
  setCurrentPage,
  getCategoryButtonColor,
}) => {
  const handleCategoryClick = (category) => {
    filterItems(category)
    setCurrentPage(1)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        marginBottom: 4,
      }}
    >
      {categories.map((category) => {
        const categoryColor = getCategoryButtonColor(category)
        return (
          <Button
            variant="contained"
            key={category}
            onClick={() => handleCategoryClick(category)}
            sx={{
              backgroundColor: categoryColor,
              '&:hover': {
                backgroundColor: categoryColor,
              },
            }}
          >
            {category}
          </Button>
        )
      })}
    </Box>
  )
}

export default Categories
