import { takeLatest } from 'redux-saga/effects';
import loadCatalog from '../effects/catalogEffects';
// Action types
import { types as catalogTypes } from '../../modules/catalog';

function* watchCatalog() {
  yield takeLatest(catalogTypes.LOAD_CATALOG, loadCatalog);
}

export default watchCatalog;
