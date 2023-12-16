import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Grid container justifyContent={'center'} alignItems={'center'} height={'80vh'}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h4' textAlign={'center'}>Hello World!</Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </main>
  )
}
