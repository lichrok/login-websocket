import React from "react";
import { Redirect } from "react-router-dom";
import { LoginContainer } from '../containers/Login';

export const LoginPage = () => {
  if (!!localStorage.getItem('token')) {
    return (
      <Redirect to='/' />
    )
  }

  return <LoginContainer />;
}
