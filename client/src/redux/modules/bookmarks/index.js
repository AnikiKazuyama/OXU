import { createSelector } from 'reselect';
import withLoadable, { INITIAL_LOADABLE_STATE } from '../../HOR/withLoadable';

// Types

export const types = {
  LOAD_BOOKMARKS: 'LOAD_BOOKMARKS',
  LOAD_BOOKMARKS_SUCCESS: 'LOAD_BOOKMARKS_SUCCESS',
  LOAD_BOOKMARKS_FAIL: 'LOAD_BOOKMARKS_FAIL',
  ADD_BOORMARK: 'ADD_BOORMARK',
  ADD_BOORMARK_SUCCESS: 'ADD_BOORMARK_SUCCESS',
  ADD_BOORMARK_FAIL: 'ADD_BOORMARK_FAIL'
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

const addBookmark = (to, bookmarkId) => ({
  type: types.ADD_BOORMARK,
  payload: {
    to,
    bookmarkId
  }
});

const addBookmarkSuccess = (to, bookmark) => ({
  type: types.ADD_BOORMARK_SUCCESS,
  payload: {
    to,
    bookmark
  }
});

const addBookmarkFail = error => ({
  type: types.ADD_BOORMARK_FAIL,
  error
});

export const actions = {
  loadBookmarks,
  loadBookmarksSuccess,
  loadBookmarksFail,
  addBookmark,
  addBookmarkSuccess,
  addBookmarkFail
};

export const getBookmarks = state => state.bookmarks.result;

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
    case (types.addBookmarkSuccess): {
      if (action.to === 'Done' || action.to === 'Reading' || action.to === 'Favorite') {
        const { result } = state;
        const { to, bookmark } = action.payload;

        return ({
          ...state,
          result: {
            ...result,
            [result[to]]: {
              ...result[to],
              bookmark
            }
          }
        });
      }
      return state;
    }
    default:
      return state;
  }
};

export default withLoadable({
  isLoadingAction: types.LOAD_BOOKMARKS,
  successAction: types.LOAD_BOOKMARKS_SUCCESS,
  errorAction: types.LOAD_BOOKMARKS_SUCCESS
})(bookmarks);
