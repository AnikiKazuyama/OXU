import { takeLatest } from 'redux-saga/effects';
import * as effects from '../effects/bookmarkEffects';
// Action types
import { types as bookmarkTypes } from '../../modules/bookmarks';

function* watchBookmarks() {
  yield takeLatest(bookmarkTypes.LOAD_BOOKMARKS, effects.loadBookmarks);
  yield takeLatest(bookmarkTypes.ADD_BOORMARK, effects.addBookmark);
}

export default watchBookmarks;
