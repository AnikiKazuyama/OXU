import { all } from 'redux-saga/effects';

import helloSaga from './watchers/helloSaga';
import profileWatcher from './watchers/profileWatcher';
import bookmarkWatcher from './watchers/bookmarkWatcher';

function* rootSaga() {
  yield all([
    helloSaga(),
    profileWatcher(),
    bookmarkWatcher()
  ]);
}

export default rootSaga;
