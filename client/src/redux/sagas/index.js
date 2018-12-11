import { all } from 'redux-saga/effects';

import helloSaga from './watchers/helloSaga';
import profileWatcher from './watchers/profileWatcher';

function* rootSaga() {
  yield all([
    helloSaga(),
    profileWatcher()
  ]);
}

export default rootSaga;
