import { eventChannel, END } from 'redux-saga';
import { call, put, take, takeLatest } from 'redux-saga/effects';
import { SubscribeTimer } from '../../core/api/Timer';
import * as actions from "../actions/timer";
import { ITimer } from "../../core/types/ITimer";
// import * as types from "../../utils/timer-statuses";


let ws: WebSocket | null;
let wsCancelled = false

function createEventChannel(ws: WebSocket) {
  return eventChannel(emit => {
    let limit = 0;
    let timer: number;
    const disconnect = () => {
      emit({ status: 2 })
      emit(END);
    }

    ws.onopen = () => {
      timer = window.setInterval(() => {
        if (limit > 2) {
          disconnect()
        } else if (limit >= 1) {
          emit({ status: 1 })
        }
        limit++
      }, 1000)
    };

    ws.onmessage = (e: MessageEvent) => {
      limit = 0
      const data = JSON.parse(e.data)
      const time: number | null = data['server_time'] || null;
      emit({ time, status: 0 })
    };

    ws.onerror = () => {
      disconnect()
    };

    ws.onclose = () => {
      disconnect()
    };

    return () => {
      clearInterval(timer)
      ws.close()
    };
  });
}

function* subscribeTimerSaga() {
  wsCancelled = false;

  try {
    yield put(actions.timerRequest())
    const response = yield SubscribeTimer();
    const url: string = response.data.url
    ws = new WebSocket(url)

    const channel = yield call(createEventChannel, ws)

    while (true) {
      const response: ITimer = yield take(channel)
      yield put(actions.timerSuccess(response))
    }
  } catch (error) {

  } finally {
    if (!wsCancelled) {
      yield put(actions.subscribeTimer())
    }
  }
}

export function* watchSubscribeTimer() {
  yield takeLatest([actions.subscribeTimer], subscribeTimerSaga)
}

function unSubscribeTimerSaga() {
  wsCancelled = true
  ws && ws.close()
  ws = null
}

export function* watchUnSubscribeTimer() {
  yield takeLatest([actions.unsubscribeTimer], unSubscribeTimerSaga);
}
