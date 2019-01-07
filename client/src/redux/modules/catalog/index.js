import { createSelector } from 'reselect';
import withLoadable, { INITIAL_LOADABLE_STATE } from '../../HOR/withLoadable';

// Types

export const types = {
  LOAD_CATALOG: 'LOAD_CATALOG',
  LOAD_CATALOG_SUCCESS: 'LOAD_CATALOG_SUCCESS',
  LOAD_CATALOG_FAIL: 'LOAD_CATALOG_FAIL'
};

// Actions

function loadCatalog(page, filterOptions) {
  return ({
    type: types.LOAD_CATALOG,
    payload: {
      page,
      filterOptions
    }
  });
}

function loadCatalogSucess({ totalPages, totalItems, result }) {
  return ({
    type: types.LOAD_CATALOG_SUCCESS,
    payload: {
      totalPages,
      totalItems,
      media: result
    }
  });
}

function loadCatalogFail(error) {
  return ({
    type: types.LOAD_CATALOG_FAIL,
    error
  });
}

export const actions = {
  loadCatalog,
  loadCatalogSucess,
  loadCatalogFail
};

// Reducer

const initialState = {
  result: {
    totalPages: 0,
    totalItems: 0,
    media: []
  },
  status: { ...INITIAL_LOADABLE_STATE }
};

function catalog(state = initialState, action) {
  switch (action.type) {
    case (types.LOAD_CATALOG_SUCCESS): {
      const { totalItems, totalPages, media } = action.payload;

      return ({
        ...state,
        result: {
          totalItems,
          totalPages,
          media
        }
      });
    }

    default:
      return state;
  }
}

// Selectors

export const getPages = createSelector(
  state => state.catalog.result,
  catalogData => catalogData.totalPages
);

export const getMedia = createSelector(
  state => state.catalog.result,
  catalogData => catalogData.media
);

export default withLoadable({
  isLoadingAction: types.LOAD_CATALOG,
  successAction: types.LOAD_CATALOG_SUCCESS,
  errorAction: types.LOAD_CATALOG_FAIL
})(catalog);
