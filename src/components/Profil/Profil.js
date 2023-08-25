import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import StarIcon from '@mui/icons-material/Star'
import friendsData from './friends.json'
import Friend from './Friend'
import Pagination from '@mui/material/Pagination'
import Tooltip from '@mui/material/Tooltip'

const Profil = () => {
  const friendsPerPage = 12

  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPage, setSelectedPage] = useState(1)

  const displayFriends = friendsData.slice(
    (currentPage - 1) * friendsPerPage,
    currentPage * friendsPerPage
  )

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

  return (
    <Container maxWidth="lg" sx={{ paddingY: 5 }}>
      <Box>
        <Paper
          elevation={3}
          sx={{ display: 'flex', gap: 5, background: 'smokeWhite' }}
        >
          <Box sx={{ width: 350 }}>
            <img
              src="./images/profilovka.jpg"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            ></img>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'baseline',
              }}
            >
              <Box>
                <Typography variant="h3" gutterBottom sx={{ paddingTop: 2 }}>
                  Richard Mrkvička
                </Typography>
              </Box>
              <Box>
                <img src="./images/slovensko.png" style={{ width: 90 }}></img>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Tooltip
                  title="Datum registrácie"
                  placement="top"
                  PopperProps={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0, -15],
                        },
                      },
                    ],
                  }}
                >
                  <Box
                    sx={{
                      paddingLeft: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <SportsEsportsIcon
                      sx={{ fontSize: 50 }}
                    ></SportsEsportsIcon>
                    <Typography variant="subtitle2" gutterBottom>
                      24.8.2023
                    </Typography>
                  </Box>
                </Tooltip>
                <Tooltip
                  title="Počet priateľov"
                  placement="top"
                  PopperProps={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [45, -15],
                        },
                      },
                    ],
                  }}
                >
                  <Box
                    sx={{
                      paddingLeft: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <PeopleAltIcon sx={{ fontSize: 50 }}></PeopleAltIcon>
                    <Typography variant="subtitle2" gutterBottom>
                      {friendsData.length}
                    </Typography>
                  </Box>
                </Tooltip>
                <Tooltip
                  title="Počet trofejí"
                  placement="top"
                  PopperProps={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [45, -15],
                        },
                      },
                    ],
                  }}
                >
                  <Box
                    sx={{
                      paddingLeft: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <EmojiEventsIcon sx={{ fontSize: 50 }}></EmojiEventsIcon>
                    <Typography variant="subtitle2" gutterBottom>
                      76/100
                    </Typography>
                  </Box>
                </Tooltip>
                <Tooltip
                  title="Typ členstva"
                  placement="top"
                  PopperProps={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [45, -15],
                        },
                      },
                    ],
                  }}
                >
                  <Box
                    sx={{
                      paddingLeft: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <StarIcon sx={{ fontSize: 50 }}></StarIcon>
                    <Typography variant="subtitle2" gutterBottom>
                      VIP Členstvo
                    </Typography>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ marginTop: 3 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: 'center', paddingY: 3 }}
          >
            Zoznam priateľov
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ width: '20%' }}>
              Meno
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ width: '20%' }}>
              Úroveň
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ width: '20%' }}>
              Priatelia
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ width: '20%' }}>
              Úspechy
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ width: '20%' }}>
              Aktivita
            </Typography>
          </Box>
        </Paper>
        {displayFriends.map((friend) => {
          return <Friend key={friend.id} {...friend}></Friend>
        })}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
        <Pagination
          count={Math.ceil(friendsData.length / friendsPerPage)}
          color="primary"
          onChange={handlePageChange}
          page={selectedPage}
        />
      </Box>
    </Container>
  )
}

export default Profil
