import { createSelector } from 'reselect';
import withLoadable from '../../HOR/withLoadable';

// Types

export const types = {
  CHANGE_EXP: 'CHANGE_EXP',
  CHANGE_AVATAR: 'CHANGE_AVATAR',
  CHANGE_HERO: 'CHANGE_HERO',
  LOAD_PROFILE: 'LOAD_PROFILE',
  LOAD_PROFILE_SUCCESS: 'LOAD_PROFILE_SUCCESS',
  LOAD_PROFILE_FAIL: 'LOAD_PROFILE_FAIL'
};

// Actions

const changeExp = exp => ({
  type: types.CHANGE_EXP,
  exp
});

const changeAvatar = url => ({
  type: types.CHANGE_AVATAR,
  url
});

const changeHero = url => ({
  type: types.CHANGE_HERO,
  url
});

const loadProfile = () => ({
  type: types.LOAD_PROFILE
});

const loadProfileSuccess = response => ({
  type: types.LOAD_PROFILE_SUCCESS,
  data: response
});

const loadProfileFail = error => ({
  type: types.LOAD_PROFILE,
  error
});

export const actions = {
  changeExp,
  changeAvatar,
  changeHero,
  loadProfile,
  loadProfileSuccess,
  loadProfileFail
};

// Selectors

export const getProfile = createSelector(state => state.profile, user => user);

// Reducers

const initialExp = {
  max: 100,
  current: 0,
  lvl: 1
};

const initialState = {
  nickname: '',
  hero: '',
  avatar: '',
  experience: initialExp
};

function profile(state = initialState, action) {
  switch (action.type) {
    case (types.LOAD_PROFILE):
      return {
        ...state
      };

    case (types.LOAD_PROFILE_SUCCESS):
      return {
        ...state,
        ...action.data,
        experience: { ...action.data.experience }
      };

    case (types.LOAD_PROFILE_FAIL):
      return {
        ...state,
        ...action.data
      };

    default:
      return state;
  }
}

export default withLoadable({
  isLoadingAction: types.LOAD_PROFILE,
  successAction: types.LOAD_PROFILE_SUCCESS,
  errorAction: types.LOAD_PROFILE_FAIL
})(profile);
