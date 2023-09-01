import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Difficulties = ({
  getDifficultyButtonColor,
  filterItems,
  setCurrentPage,
  difficulties,
}) => {
  const handleDiffcultyClick = (category) => {
    filterItems(category)
    setCurrentPage(1)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4,
        marginBottom: 4,
      }}
    >
      {difficulties.map((category) => {
        const categoryColor = getDifficultyButtonColor(category)
        return (
          <Button
            variant="contained"
            key={category}
            onClick={() => handleDiffcultyClick(category)}
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

export default Difficulties
