import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const tiers = [
  {
    title: 'Zadarmo',
    price: '0',
    description: [
      '15 lekcií z každého',
      '5 taktík za deň',
      '3 kvízy na deň',
      'Obmedzené štatistiky',
    ],
    buttonText: 'Registruj sa zadarmo',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Najviac populárne',
    price: '9',
    description: [
      'Neobmedzené lekcie',
      'Neombedzené taktiky',
      'Neobmedzené kvízy',
      'Všetky štatistiky',
    ],
    buttonText: 'Registruj sa',
    buttonVariant: 'contained',
  },
  {
    title: 'Pre školy',
    price: '59',
    description: [
      '50 používateľov',
      'Neobmedzené lekcie',
      'Neobmedzené taktiky',
      'Všetky štatistiky',
    ],
    buttonText: 'Kontaktuj nás',
    buttonVariant: 'outlined',
  },
]

export default function Cennik() {
  return (
    <div style={{ paddingBottom: 84, paddingTop: 30 }}>
      <Container
        maxWidth="md"
        component="main"
        sx={{ paddingY: 4, paddingX: 2 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Cenník
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          sx={{ textAlign: 'justify', paddingY: 2 }}
        >
          Jediná stránka ktorú kedy budeš potrebovať na zlepšenie sa v šachu a
          dosiahnutie svojej požadovanej výkonnosti! Naučíme ťa od základov
          koncovky, taktiku a aj koncovky a to všetko len za 9€ mesačne.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center', color: 'white' }}
                  action={tier.title === 'Pro' ? <StarBorderIcon /> : null}
                  sx={{ background: '#1976d2', color: 'white' }}
                />
                <CardContent>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      marginBottom: 18,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price}€
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  {tier.description.map((line) => (
                    <Typography
                      component="p"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                    style={
                      tier.buttonText === 'Registruj sa'
                        ? { backgroundColor: 'darkGreen', color: 'white' }
                        : {}
                    }
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
