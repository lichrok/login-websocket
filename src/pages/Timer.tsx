import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TimerContainer } from '../containers/Timer';

export function TimerPage({ ...props }) {
  if (!localStorage.getItem('token')) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <Route {...props} render={() => (<TimerContainer />)} />
  )
}