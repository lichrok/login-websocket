import { createAction } from 'redux-actions';

export const login = createAction('login');
export const loginRequest = createAction('loginRequest');
export const loginSuccess = createAction('loginSuccess');
export const loginError = createAction('loginError');
export const logout = createAction('logout');
