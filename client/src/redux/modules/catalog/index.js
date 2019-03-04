import { createSelector } from 'reselect';
import { handleAction } from 'redux-actions';

import withLoadable from '../../HOR/withLoadable';
import generateLoadableActions from '../../helpers/factories/loadableFactory';

const moduleName = 'catalog';
const loadable = generateLoadableActions(moduleName);

// Types
export const types = {
  ...loadable.types
};

// Actions
export const actions = {
  ...loadable.actions
};

// Reducer

const initialState = {
  totalPages: 0,
  totalItems: 0,
  media: []
};

function handleLoadSuccess(state, { payload }) {
  const {
    totalItems,
    totalPages,
    result
  } = payload.data;

  return ({
    ...state,
    totalItems,
    totalPages,
    media: result
  });
}

const catalogReducer = handleAction(
  actions.loadSuccess,
  handleLoadSuccess,
  initialState
);
// Selectors

export const getPages = createSelector(
  state => state.catalog.data,
  catalogData => catalogData.totalPages
);

export const getMedia = createSelector(
  state => state.catalog.data,
  catalogData => catalogData.media
);

export default withLoadable({
  ...loadable.actions
})(catalogReducer);
