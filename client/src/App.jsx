import React, { PureCompontent } from 'react';
import WDYU from 'why-did-you-update';
import { Switch, Route } from 'react-router-dom';

import Main from './components/main';
import HeaderContainer from './containers/headerContainer';
import ReaderRoute from './components/reader/readerRoute';

import './assets/style/common.scss';
import './assets/style/fonts.scss';
import './assets/style/normalize.scss';
import './assets/style/reset.scss';

class App extends PureCompontent {
  render() {
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
            <React.Fragment>
              <HeaderContainer />
              <Main />
            </React.Fragment>
          )}
        />
      </Switch>
    );
  }
}

export default App;
