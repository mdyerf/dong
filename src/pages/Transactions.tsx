import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

interface Transaction {
  name: string;
  date: string;
  amount: number;
}

interface TransactionsProps {
  transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Transactions
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <List>
          {transactions.map((transaction, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={transaction.name}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textSecondary">
                        {transaction.date}
                      </Typography>
                      {' — '}
                      <Typography component="span" variant="body2" color="success.main">
                        ${transaction.amount.toFixed(2)}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < transactions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Transactions;
