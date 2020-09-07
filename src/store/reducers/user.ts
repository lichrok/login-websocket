import { IAction } from '../../core/types';
import { handleActions } from 'redux-actions';
import { 
  login,
  loginRequest,
  loginError,
  loginSuccess,
  logout
 } from '../actions/user';
import { IUserState } from '../../core/types/IUser'; 

const initialState: IUserState = {
  loading: false,
  error: ''
}

export const user = handleActions(
  new Map([
      [
          login,
          (state: IUserState) => ({
             ...state
          })
      ],
      [
          loginRequest,
          () => ({
              loading: true, error: ''
          })
      ],
      [
          loginSuccess,
          () => ({
              loading: false, error: ''
          })
      ],
      [
          loginError,
          (_: IUserState, {payload}: IAction) => ({
              loading: false, error: payload
          })
      ],
      [
          logout,
          () => ({
            ...initialState
          })
      ]
  ]) as {},
  initialState
);
