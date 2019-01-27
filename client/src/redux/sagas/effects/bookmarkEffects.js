import { put, call } from 'redux-saga/effects';

import ProfileRequests from '../../../utils/restService/profileRequests';
import { actions as bookmarksActions } from '../../modules/bookmarks';

function* loadBookmarks() {
  const { loadBookmarksSuccess, loadBookmarksFail } = bookmarksActions;

  const response = yield call(ProfileRequests.getFakeBookmarks);

  if (response) {
    yield put(loadBookmarksSuccess(response));
  } else {
    yield put(loadBookmarksFail({ errorCode: 13, errorMessage: 'Focking hell' }));
  }
}

function* addBookmark(action) {
  const { addBookmarkSuccess, addBookmarkFail } = bookmarksActions;
  const { bookmarkId, to } = action.payload;

  const response = yield call(ProfileRequests.addBookmark, to, bookmarkId);

  if (response) {
    yield put(addBookmarkSuccess(to, response.result));
  } else {
    yield put(addBookmarkFail({ errorCode: 13, errorMessage: 'Focking hell' }));
  }
}

export {
  loadBookmarks,
  addBookmark
};
