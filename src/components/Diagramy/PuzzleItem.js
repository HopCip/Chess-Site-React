import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const PuzzleItem = ({ title, difficulty, img, category }) => {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  })

  return (
    <Paper elevation={12} sx={{ paddingY: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            minHeight: 300,
            padding: 2,
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
            paddingX: 2,
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
            },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                marginRight: 1,
                backgroundColor: getCategoryButtonColor(category),
                '&:hover': {
                  backgroundColor: getCategoryButtonColor(category),
                },
              }}
            >
              {category}
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: getDifficultyButtonColor(difficulty),
                '&:hover': {
                  backgroundColor: getDifficultyButtonColor(difficulty),
                },
              }}
            >
              {difficulty}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: 2,
            marginTop: {
              xs: 2,
              sm: 2,
              md: 0,
              lg: 0,
              xl: 0,
            },
            '& > legend': { mt: 2 },
          }}
        >
          <StyledRating
            name="customized-color"
            defaultValue={0}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </Box>
      </Box>
    </Paper>
  )
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
      return 'inherit'
  }
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

export default PuzzleItem
