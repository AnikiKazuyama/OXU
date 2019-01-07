import { createSelector } from 'reselect';
import withLoadable, { INITIAL_LOADABLE_STATE } from '../../HOR/withLoadable';

// Types

export const types = {
  LOAD_BOOKMARKS: 'LOAD_BOOKMARKS',
  LOAD_BOOKMARKS_SUCCESS: 'LOAD_BOOKMARKS_SUCCESS',
  LOAD_BOOKMARKS_FAIL: 'LOAD_BOOKMARKS_FAIL',
  CREATE_LIST: 'CREATE_LIST'
};

// Actions

const loadBookmarks = () => ({
  type: types.LOAD_BOOKMARKS
});

const loadBookmarksSuccess = response => ({
  type: types.LOAD_BOOKMARKS_SUCCESS,
  data: response
});

const loadBookmarksFail = error => ({
  type: types.LOAD_BOOKMARKS,
  error
});

const addTo = shortInfo => ({
  type: types.ADD_TO,
  data: shortInfo
});

export const actions = {
  loadBookmarks,
  loadBookmarksSuccess,
  loadBookmarksFail,
  addTo
};

export const getBookmarks = createSelector(state => state.bookmarks.result, bookmarks => bookmarks);

const initialState = {
  result: {
    listNames: []
  },
  status: { ...INITIAL_LOADABLE_STATE }
};

const bookmarks = (state = initialState, action) => {
  switch (action.type) {
    case (types.LOAD_BOOKMARKS_SUCCESS):
      return ({
        ...state,
        result: {
          ...action.data
        }
      });

    default:
      return state;
  }
};

export default withLoadable({
  isLoadingAction: types.LOAD_BOOKMARKS,
  successAction: types.LOAD_BOOKMARKS_SUCCESS,
  errorAction: types.LOAD_BOOKMARKS_SUCCESS
})(bookmarks);
