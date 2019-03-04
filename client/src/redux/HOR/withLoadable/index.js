import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

export const INITIAL_LOADABLE_STATE = {
  error: null,
  isLoading: false,
  success: false
};

function handleError(state, { payload }) {
  return ({
    ...state,
    error: payload.error,
    isLoading: false,
    success: false
  });
}

function handleSuccess(state) {
  return ({
    ...state,
    error: null,
    isLoading: false,
    success: true
  });
}

function handleLoading(state) {
  return ({
    ...state,
    error: null,
    isLoading: true,
    success: false
  });
}

const withLoadable = (actionTypes) => {
  const status = handleActions(
    new Map([
      [actionTypes.load, handleLoading],
      [actionTypes.loadSuccess, handleSuccess],
      [actionTypes.loadError, handleError]
    ]),
    INITIAL_LOADABLE_STATE
  );

  return baseReducer => (combineReducers({ status, data: baseReducer }));
};

export default withLoadable;
