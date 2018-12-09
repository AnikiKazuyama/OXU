import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from '..';
import logger from 'redux-logger';
import Sagas from '../sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    logger
  )
);

sagaMiddleware.run(Sagas);

export default store;
