import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import citatyData from './citatyData'

const Citat = () => {
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(0)

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * citatyData.length)
    setRandomQuoteIndex(randomIndex)
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  const { text, author } = citatyData[randomQuoteIndex]

  return (
    <Box align="center" sx={{ marginBottom: 4 }}>
      <Typography variant="body1" color="textPrimary">
        &quot;{text}`&quot;
        <br />
        <br />- {author}
      </Typography>
    </Box>
  )
}

export default Citat
