import React, {Component, Fragment} from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

import Main from './view/main';
import HeaderContainer from './containers/headerContainer';

import Polyfill from './utils/Polyfill';

import './assets/style/common.scss';
import './assets/style/fonts.scss';
import './assets/style/normalize.scss';
import './assets/style/reset.scss';

class App extends Component {

  constructor(props) {
    super(props);

    library.add(faRandom);
  }

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
