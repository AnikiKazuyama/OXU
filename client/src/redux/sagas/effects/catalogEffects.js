import { put, call } from 'redux-saga/effects';

import CatalogRequests from '../../../utils/restService/catalogRequests';
import { actions as catalogActions } from '../../modules/catalog';

function* loadCatalog(action) {
  const { loadSuccess, loadFail } = catalogActions;
  const response = yield call(CatalogRequests.getFakeCatalog, action.payload.page);

  if (response) {
    yield put(loadSuccess(response));
  } else {
    yield put(loadFail({ errorCode: 13, errorMessage: 'Focking hell' }));
  }
}

export default loadCatalog;
