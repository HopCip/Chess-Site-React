import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const Nastavenia = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <Container maxWidth="lg" sx={{ marginY: 5 }}>
      <Box>
        <Box>
          <Box
            sx={{
              backgroundColor: 'primary.dark',
              padding: 2,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'white', margin: 'auto 0' }}
            >
              Nastavenia
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item sx={{ paddingLeft: 3 }}>
                  <Typography variant="h6" align="left" gutterBottom>
                    Všeobecné
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Dostávať upozornenia na novinky"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Tmavý režim"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Povoliť výzvy"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Oznámenia o udalostiach"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Moji priatelia ma môžu vyzvať v hocičom"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Môj blog môžu vidieť"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Povoliť pozvánky do klubov"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Povoliť pozvánky do turnajov"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Bezpečnostný režim"
                    />
                  </FormGroup>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={{ paddingLeft: 3 }}>
                  <Typography variant="h6" align="left" gutterBottom>
                    Šachovnica
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Kreslenie šípok"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Robenie predťahov"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Vždy ukazovať notáciu"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Vždy spúšťať motor"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Zobrazovať čas"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Zobrazovať správne ťahy"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Zobrazovať komentáre"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Miesto na poznámky"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Vždy meraj čas"
                    />
                  </FormGroup>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={{ paddingLeft: 3 }}>
                  <Typography variant="h6" align="left" gutterBottom>
                    Pokročilé
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Zdieľané účty"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Automatické platby"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Po platbe zmazať kartu"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Nezobrazovať históriu diagramov"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Nezobrazovať históriu lekcií"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Nezobrazovať históriu kvízov"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Anonymný člen"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Mód inkognito"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Povoliť cookies vždy"
                    />
                  </FormGroup>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={{ paddingLeft: 3 }}>
                  <Typography variant="h6" align="left" gutterBottom>
                    Profil
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Ukazovať stav"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Ukazovať krajinu"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="všetci môžu vidieť moj profil"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Všetci mi môžu posielať správy"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Všetci môžu vidieť môj progres"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Všetci môžu vidieť mojich priateľov"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Všetci ma môžu vyzvať"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Všetci ma môžu vyhľadať"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Všetci môžu vidieť moju profilovku"
                    />
                  </FormGroup>
                </Item>
              </Grid>
            </Grid>
            <Box
              sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}
            >
              <Button variant="contained">Uložiť</Button>
              <Button variant="outlined" color="error" sx={{ marginLeft: 2 }}>
                Zrušiť
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Nastavenia
