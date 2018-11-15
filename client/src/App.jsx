import React, { Fragment } from 'react';
import WDYU from 'why-did-you-update';
import { Switch, Route } from 'react-router-dom';

import smoothScroll from 'smoothscroll-polyfill';

import Main from './components/main';
import HeaderContainer from './containers/headerContainer';
import ReaderRoute from './components/reader/readerRoute';

import './assets/style/common.scss';
import './assets/style/fonts.scss';
import './assets/style/normalize.scss';
import './assets/style/reset.scss';

smoothScroll.polyfill();

function App() {
  WDYU(React);
  return (
    <Switch>
      <Route
        path="/read"
        component={ReaderRoute}
      />
      <Route
        path="/"
        component={() => (
          <Fragment>
            <HeaderContainer />
            <Main />
          </Fragment>
        )}
      />
    </Switch>
  );
}

export default App;
