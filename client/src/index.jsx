import 'core-js/es6/map';
import 'core-js/es6/set';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import  App from './App';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);
