import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modal from './modules/modal';
import profile from './modules/profile';
import bookmarks from './modules/bookmarks';
import catalog from './modules/catalog';
import manga from './modules/manga';

export default history => combineReducers({
  router: connectRouter(history),
  modal,
  profile,
  bookmarks,
  catalog,
  manga
});
