import React from "react";
import { Redirect } from "react-router-dom";
import { Grid, Paper, Box } from '@material-ui/core';
import { LoginContainer } from '../containers/Login';

export const LoginPage = () => {
  if (!!localStorage.getItem('token')) {
    return (
      <Redirect to='/' />
    )
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Paper elevation={3}>
        <Box m={2}>
          <LoginContainer />
        </Box>
      </Paper>
    </Grid>
  );
}
