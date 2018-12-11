import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modal from './modules/modal';
import profile from './modules/profile';

export default history => combineReducers({
  router: connectRouter(history),
  modal,
  profile
});
