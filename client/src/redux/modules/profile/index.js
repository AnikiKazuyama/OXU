import { createSelector } from 'reselect';
import { createAction, handleAction } from 'redux-actions';
import withLoadable from '../../HOR/withLoadable';
import generateLoadableActions from '../../helpers/factories/loadableFactory';

// Types
const moduleName = 'profile';

const loadable = generateLoadableActions(moduleName);

export const types = {
  CHANGE_EXP: 'CHANGE_EXP',
  CHANGE_AVATAR: 'CHANGE_AVATAR',
  CHANGE_HERO: 'CHANGE_HERO',
  ...loadable.types
};

// Actions
const changeExp = createAction(types.CHANGE_EXP, exp => exp);
const changeAvatar = createAction(types.CHANGE_AVATAR, avatarUrl => avatarUrl);
const changeHero = createAction(types.CHANGE_HERO, heroUrl => heroUrl);

export const actions = {
  changeExp,
  changeAvatar,
  changeHero,
  ...loadable.actions
};

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

function handleLoadSuccess(state, { payload }) {
  return ({
    ...state,
    ...payload.data
  });
}

const profileReducer = handleAction(
  actions.loadSuccess,
  handleLoadSuccess,
  initialState
);

// Selectors
export const getProfile = createSelector(state => state.profile.result, user => user);

export default withLoadable({
  ...loadable.actions
})(profileReducer);
