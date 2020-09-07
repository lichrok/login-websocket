import { AppState } from '../reducers/rootReducer';

const _getSelector = (state: AppState) => state.user;

export const loading = (state: AppState) => _getSelector(state).loading;
export const error = (state: AppState) => _getSelector(state).error;
