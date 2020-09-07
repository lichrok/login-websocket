import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoginForm } from '../components/LoginForm';
import * as actions from '../store/actions/user';
import * as selectors from '../store/selectors/user';

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.loading);
  const error = useSelector(selectors.error);
  const login = useCallback(
    (form) => dispatch(actions.login(form)),
    [dispatch]
  );

  return (
    <LoginForm login={login} loading={loading} error={error} />
  )
}
