import * as React from 'react';

import Main from './components/main';
import HeaderContainer from './containers/headerContainer';

import './assets/style/common.scss';
import './assets/style/fonts.scss';
import './assets/style/normalize.scss';
import './assets/style/reset.scss';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <HeaderContainer/>
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
