import React from 'react'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Box
      sx={{
        paddingY: 3,
        paddingX: 4,
        width: '100%',
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#ffffff',
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          ŠACHUJ s nami hneď
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Copyright © HopCip. All Rights Reserved
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            sx={{
              fontSize: 24,
              color: 'white',
              transition: 'color 0.7s',
              '&:hover': {
                color: 'blue',
              },
            }}
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            sx={{
              fontSize: 24,
              color: 'white',
              transition: 'color 0.7s',
              '&:hover': {
                color: 'lightblue',
              },
            }}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            sx={{
              fontSize: 24,
              color: 'white',
              transition: 'color 0.7s',
              '&:hover': {
                color: 'pink',
              },
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            sx={{
              fontSize: 24,
              color: 'white',
              transition: 'color 0.7s',
              '&:hover': {
                color: 'blue',
              },
            }}
          />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon
            sx={{
              fontSize: 24,
              color: 'white',
              transition: 'color 0.7s',
              '&:hover': {
                color: 'red',
              },
            }}
          />
        </a>
      </Box>
    </Box>
  )
}

export default Footer
