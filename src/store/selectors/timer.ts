import { AppState } from '../reducers/rootReducer';

const _getSelector = (state: AppState) => state.timer

export const time = (state: AppState) => _getSelector(state).time
export const status = (state: AppState) => _getSelector(state).status
