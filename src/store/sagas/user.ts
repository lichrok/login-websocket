import { put, takeLatest } from 'redux-saga/effects';
import { UserLogin } from '../../core/api/User';
import {
  login,
  loginRequest,
  loginSuccess,
  loginError,
  logout
} from '../actions/user';
import { history } from '../../App';
import { IUser } from '../../core/types/IUser';

function* loginSaga({ payload }: { type: string, payload: IUser }) {
  try {
    yield put(loginRequest());
    const { headers } = yield UserLogin(payload);
    const token = headers['x-test-app-jwt-token'];

    localStorage.setItem('token', token);
    yield put(loginSuccess());

    history.push('/');
  } catch (error) {
    if (error.response.status === 500) {
      yield put(login(payload));
    }
    localStorage.removeItem('token');
    yield put(loginError(error.response.data.description || 'Error'));
  }
}

export function* watchLogin() {
  yield takeLatest([login], loginSaga);
}

function logoutSaga() {
  localStorage.removeItem('token');
  history.push('/login');
}

export function* watchLogout() {
  yield takeLatest([logout], logoutSaga);
}
