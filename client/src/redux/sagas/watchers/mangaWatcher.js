import { takeLatest } from 'redux-saga/effects';
import loadManga from '../effects/mangaEffects';
// Action types
import { types as mangaTypes } from '../../modules/manga';

function* watchCatalog() {
  yield takeLatest(mangaTypes.LOAD_MANGA, loadManga);
}

export default watchCatalog;
