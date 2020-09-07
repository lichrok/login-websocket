import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import sagas from './sagas';

export default function configureStore() {
  const middleWare = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(middleWare)
  );
  middleWare.run(sagas);

  return store;
}
