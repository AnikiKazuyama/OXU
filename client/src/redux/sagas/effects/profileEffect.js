import { put, call } from 'redux-saga/effects';

import ProfileRequests from '../../../utils/restService/profileRequests';
import { actions as profileActions } from '../../modules/profile';

function* loadProfile() {
  const { loadProfileSuccess, loadProfileFail } = profileActions;

  const response = yield call(ProfileRequests.getFakeProfile);

  if (response) {
    yield put(loadProfileSuccess(response));
  } else {
    yield put(loadProfileFail({ errorCode: 13, errorMessage: 'Focking hell' }));
  }
}

export default loadProfile;
