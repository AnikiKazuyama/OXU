import { put, call } from 'redux-saga/effects';

import ProfileRequests from '../../../utils/restService/profileRequests';
import { actions as profileActions } from '../../modules/profile';

function* loadProfile() {
  const { loadSuccess, loadFail } = profileActions;

  const response = yield call(ProfileRequests.getFakeProfile);

  if (response) {
    yield put(loadSuccess(response));
  } else {
    yield put(loadFail({ errorCode: 13, errorMessage: 'Focking hell' }));
  }
}

export default loadProfile;
