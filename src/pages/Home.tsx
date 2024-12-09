import { Box, Typography, Container, Grid, Paper } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Paper sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3" component="h1" align="center" sx={{ marginBottom: 2 }}>
              Welcome to Dong
            </Typography>
            <Typography variant="h6" component="h2" align="center" color="textSecondary">
              A simple app to split expenses and track balances with friends.
            </Typography>
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="body1" align="center" paragraph>
                Dong helps you keep track of your shared expenses and settle payments with friends easily.
                Whether you're going on a trip, dining together, or managing group purchases, Dong makes sure that
                everyone pays their fair share and keeps everything in balance.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Simply add your transactions, invite your friends, and let Dong handle the math. No more confusion
                over who owes what just a simple, intuitive experience for managing shared costs.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
