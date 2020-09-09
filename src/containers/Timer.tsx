import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Paper, Box, Button } from '@material-ui/core';
import * as actions from '../store/actions/timer';
import * as selectors from '../store/selectors/timer';
import { logout } from '../store/actions/user';
import { Timer } from '../components/Timer';

export const TimerContainer = () => {
  const dispatch = useDispatch();
  const time = useSelector(selectors.time);
  const status = useSelector(selectors.status);
  const handleLogout = useCallback(
    () => dispatch(logout()),
    [dispatch]
  )

  useEffect(() => {
    dispatch(actions.subscribeTimer());

    return () => {
      dispatch(actions.unsubscribeTimer());
    }
  }, [dispatch]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Paper elevation={3}>
        <Box p={2}>
          <Timer time={time} status={status} />
          <Box mt={2} textAlign="right">
            <Button onClick={handleLogout}>Log out</Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

