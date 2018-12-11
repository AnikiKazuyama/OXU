import { takeLatest } from 'redux-saga/effects';
import loadProfile from '../effects/profileEffect';
// Action types
import { types as profileTypes } from '../../modules/profile';

function* watchProfile() {
  yield takeLatest(profileTypes.LOAD_PROFILE, loadProfile);
}

export default watchProfile;
