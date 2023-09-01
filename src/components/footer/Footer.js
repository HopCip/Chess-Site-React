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
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#ffffff',
      }}
    >
      <Box className="hokus">
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            paddingBottom: {
              xs: 2,
              sm: 2,
              md: 0,
              lg: 0,
              xl: 0,
            },
          }}
        >
          ŠACHUJ s nami hneď
        </Typography>
      </Box>
      <Box>
        <Typography
          className="pokus"
          variant="body2"
          gutterBottom
          sx={{
            paddingBottom: {
              xs: 3,
              sm: 3,
              md: 0,
              lg: 0,
              xl: 0,
            },
          }}
        >
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
