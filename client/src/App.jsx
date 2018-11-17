import React, { Component, Fragment } from 'react';
import WDYU from 'why-did-you-update';
import { Switch, Route } from 'react-router-dom';

import Main from './view/main';
import HeaderContainer from './containers/headerContainer';
import ReaderRoute from './view/reader/readerRoute';

import Polyfill from './utils/Polyfill';

import './assets/style/common.scss';
import './assets/style/fonts.scss';
import './assets/style/normalize.scss';
import './assets/style/reset.scss';

class App extends Component {
  componentDidMount() {
    Polyfill.initAll();
    WDYU(React);
  }

  render() {
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
}

export default App;
