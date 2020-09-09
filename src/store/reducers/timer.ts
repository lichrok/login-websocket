import { handleActions } from "redux-actions";
import * as timerActions from '../actions/timer';
import { IAction } from '../../core/types';

export interface ITimerState {
  time: number | null
  status: number
}

const initialState: ITimerState = {
  time: null,
  status: 2
};

export const timer = handleActions(
  new Map([
    [
      timerActions.subscribeTimer,
      (state: ITimerState) => ({
        ...state
      })
    ],
    [
      timerActions.timerRequest,
      (state: ITimerState) => ({
        ...state,
        status: 2
      })
    ],
    [
      timerActions.timerSuccess,
      (state: ITimerState, action: IAction) => ({
        ...state,
        ...action.payload
      })
    ],
    [
      timerActions.unsubscribeTimer,
      () => ({
        ...initialState
      })
    ]
  ]) as {},
  initialState
);
