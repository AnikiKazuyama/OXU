
import { createAction, handleActions } from 'redux-actions';
import withLoadable from '../../HOR/withLoadable';
import generateLoadableActions from '../../helpers/factories/loadableFactory';

const moduleName = 'bookmarks';

const loadable = generateLoadableActions(moduleName);

// Types
export const types = {
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  ADD_BOOKMARK_SUCCESS: 'ADD_BOOKMARK_SUCCESS',
  ADD_BOOKMARK_FAIL: 'ADD_BOOKMARK_FAIL',
  ...loadable.types
};

// Actions
const addBookmark = createAction(
  types.ADD_BOOKMARK,
  (to, bookmarkId) => ({ to, bookmarkId })
);

const addBookmarkSuccess = createAction(
  types.ADD_BOOKMARK_SUCCESS,
  (to, bookmark) => ({ to, bookmark })
);

const addBookmarkFail = createAction(
  types.ADD_BOOKMARK_FAIL,
  error => error
);

export const actions = {
  addBookmark,
  addBookmarkSuccess,
  addBookmarkFail,
  ...loadable.actions
};

export const getBookmarks = state => state.bookmarks.data || [];

const initialState = { };

function handleLoadSuccess(state, { payload }) {
  return ({
    ...state,
    ...payload.data
  });
}

function handleAddBookmarkSuccess(state, { payload }) {
  const { to, bookmark } = payload;
  if (to === 'done' || to === 'reading' || to === 'favorite') {
    if (state[to]) {
      console.log(123)
      return ({
        ...state,
        [to]: {
          items: [...state[to].items, ...bookmark]
        }
      });
    }

    return ({
      ...state,
      [to]: {
        items: [bookmark]
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
