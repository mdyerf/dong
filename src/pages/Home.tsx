import React from 'react';
import { Box, Typography, Grid, Paper, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  credit: number;
  debt: number;
}

const Home: React.FC<HomeProps> = ({ credit, debt }) => {
  const navigate = useNavigate();
  const balance = credit - debt; // Calculate balance dynamically

  const onCreditClick = () => navigate('/credits')

  const onDebtClick = () => navigate('/debts')

  const onAddTransaction = () => {
    navigate('/transaction'); // Navigate to the /transaction route
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      {/* Balance */}
      <Box sx={{ marginBottom: 4, textAlign: 'center' }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" component="h1" sx={{ marginBottom: 1 }}>
            Balance
          </Typography>
          <Typography
            variant="h5"
            color={balance >= 0 ? 'success.main' : 'error.main'}
          >
            ${balance.toFixed(2)}
          </Typography>
        </Paper>
      </Box>

      {/* Credit and Debt */}
      <Grid container spacing={4}>
        {/* Credit */}
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }} onClick={onCreditClick}>
            <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
              Credit
            </Typography>
            <Typography variant="h5" color="success.main">
              ${credit.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>

        {/* Debt */}
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }} onClick={onDebtClick}>
            <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
              Debt
            </Typography>
            <Typography variant="h5" color="error.main">
              ${debt.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Add New Transaction Button */}
      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: 2, fontSize: '1rem' }}
          onClick={onAddTransaction}
        >
          Add New Transaction
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
