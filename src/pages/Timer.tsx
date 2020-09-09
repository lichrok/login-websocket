import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { TimerContainer } from '../containers/Timer';

export function TimerPage() {
  if (!localStorage.getItem('token')) {
    return (
      <Redirect to='/login' />
    )
  }
  
  return (
    <TimerContainer />
  )
}