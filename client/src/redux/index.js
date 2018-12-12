import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modal from './modules/modal';
import profile from './modules/profile';
import bookmarks from './modules/bookmarks';

export default history => combineReducers({
  router: connectRouter(history),
  modal,
  profile,
  bookmarks
});
