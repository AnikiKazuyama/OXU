import { put, call } from 'redux-saga/effects';

import Normalizr from '../../../utils/normalizr';
import MangaRequests from '../../../utils/restService/manga';
import { actions as mangaActions } from '../../modules/manga';

function* loadManga(action) {
  const { loadSuccess, loadFail } = mangaActions;
  const response = yield call(MangaRequests.getFakeManga, action.payload.id);
  if (response) {
    yield put(loadSuccess(Normalizr.normalizeManga(response)));
  } else {
    yield put(loadFail({ errorCode: 13, errorMessage: 'Focking hell' }));
  }
}

export default loadManga;
