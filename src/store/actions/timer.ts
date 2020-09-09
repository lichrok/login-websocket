import { createAction } from 'redux-actions';

export const timerRequest = createAction('timerRequest');
export const timerSuccess = createAction('timerSuccess');
export const subscribeTimer = createAction('subscribeTimer');
export const unsubscribeTimer = createAction('unsubscribeTimer');
