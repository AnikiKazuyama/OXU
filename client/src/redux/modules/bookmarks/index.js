
import { createAction, handleActions } from 'redux-actions';
import withLoadable from '../../HOR/withLoadable';
import generateLoadableActions from '../../helpers/factories/loadableFactory';

const moduleName = 'bookmarks';

const loadable = generateLoadableActions(moduleName);

// Types
export const types = {
  ADD_BOORMARK: 'ADD_BOORMARK',
  ADD_BOORMARK_SUCCESS: 'ADD_BOORMARK_SUCCESS',
  ADD_BOORMARK_FAIL: 'ADD_BOORMARK_FAIL',
  ...loadable.types
};

// Actions
const addBookmark = createAction(
  types.ADD_BOORMARK,
  (to, bookmarkId) => ({ to, bookmarkId })
);

const addBookmarkSuccess = createAction(
  types.ADD_BOORMARK_SUCCESS,
  (to, bookmark) => ({ to, bookmark })
);

const addBookmarkFail = createAction(
  types.ADD_BOORMARK_FAIL,
  error => error
);

export const actions = {
  addBookmark,
  addBookmarkSuccess,
  addBookmarkFail,
  ...loadable.actions
};

export const getBookmarks = state => state.bookmarks.result || [];

const initialState = { };

function handleLoadSuccess(state, { payload }) {
  return ({
    ...state,
    ...payload.data
  });
}

function handleAddBookmarkSuccess(state, { payload }) {
  const { to, bookmark } = payload;
  if (to === 'Done' || to === 'Reading' || to === 'Favorite') {
    const { result } = state;

    return ({
      ...state,
      [result[to]]: {
        ...result[to],
        bookmark
      }
    });
  }

  return state;
}

const bookmarks = handleActions(
  new Map([
    [actions.loadSuccess, handleLoadSuccess],
    [actions.addBookmarkSuccess, handleAddBookmarkSuccess]
  ]),
  initialState
);

export default withLoadable({
  ...loadable.actions
})(bookmarks);
