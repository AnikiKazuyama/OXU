import { all } from 'redux-saga/effects';

import helloSaga from './watchers/helloSaga';
import profileWatcher from './watchers/profileWatcher';
import bookmarkWatcher from './watchers/bookmarkWatcher';
import catalogWatcher from './watchers/catalogWatcher';

function* rootSaga() {
  yield all([
    helloSaga(),
    profileWatcher(),
    bookmarkWatcher(),
    catalogWatcher()
  ]);
}

export default rootSaga;
