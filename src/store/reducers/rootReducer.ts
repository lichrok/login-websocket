import { combineReducers } from 'redux';
import { user } from './user';
import { timer } from './timer';

export const rootReducer = combineReducers({
  user,
  timer
});

export type AppState = ReturnType<typeof rootReducer>;
