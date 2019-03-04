import React, {Component, Fragment} from 'react';

import Main from './view/main';
import HeaderContainer from './containers/headerContainer';

import Polyfill from './utils/Polyfill';

import './assets/style/common.scss';
import './assets/style/fonts.scss';
import './assets/style/normalize.scss';
import './assets/style/reset.scss';

class App extends Component {
  componentDidMount () {
    Polyfill.initAll ();
  }

  render () {
    return (
      <Fragment>
        <HeaderContainer />
        <Main />
      </Fragment>
    );
  }
}

export default App;
