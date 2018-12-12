import { takeLatest } from 'redux-saga/effects';
import loadBookmarks from '../effects/bookmarkEffects';
// Action types
import { types as bookmarkTypes } from '../../modules/bookmarks';

function* watchBookmarks() {
  yield takeLatest(bookmarkTypes.LOAD_BOOKMARKS, loadBookmarks);
}

export default watchBookmarks;
