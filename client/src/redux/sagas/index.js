import { all } from 'redux-saga/effects';

import helloSaga from './watchers/helloSaga';
import profileWatcher from './watchers/profileWatcher';
import bookmarkWatcher from './watchers/bookmarkWatcher';
import catalogWatcher from './watchers/catalogWatcher';
import mangaWatcher from './watchers/mangaWatcher';

function* rootSaga() {
  yield all([
    helloSaga(),
    profileWatcher(),
    bookmarkWatcher(),
    catalogWatcher(),
    mangaWatcher()
  ]);
}

export default rootSaga;
