import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Friend = ({ meno, vlajka, uroven, priatelia, uspechy, aktivita }) => {
  let iconColor

  switch (aktivita) {
    case 'online':
      iconColor = 'green'
      break
    case 'away':
      iconColor = 'orange'
      break
    case 'offline':
      iconColor = 'red'
      break
    default:
      iconColor = 'gray'
  }
  return (
    <Paper elevation={3} sx={{ paddingY: 1, marginY: 1 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ textAlign: 'left' }}
          >
            {meno}
          </Typography>
          <img src={vlajka} style={{ width: 20 }}></img>
        </Box>
        <Typography variant="subtitle2" gutterBottom sx={{ width: '20%' }}>
          {uroven}
        </Typography>
        <Typography variant="subtitle2" gutterBottom sx={{ width: '20%' }}>
          {priatelia}
        </Typography>
        <Typography variant="subtitle2" gutterBottom sx={{ width: '20%' }}>
          {uspechy}
        </Typography>
        <FiberManualRecordIcon
          fontSize="small"
          sx={{ color: iconColor, width: '20%' }}
        />
      </Box>
    </Paper>
  )
}

export default Friend
