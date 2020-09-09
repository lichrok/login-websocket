import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './user';
import { watchSubscribeTimer, watchUnSubscribeTimer } from './timer';

export default function* sagas() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchSubscribeTimer(),
    watchUnSubscribeTimer()
  ]);
}
