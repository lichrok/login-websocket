import { all } from 'redux-saga/effects';
import { watchLogin } from './user';

export default function* sagas() {
  yield all([
    watchLogin(),
  ]);
}
