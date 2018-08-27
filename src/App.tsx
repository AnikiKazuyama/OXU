import * as React from 'react';

import Main from './components/main';
import HeaderContainer from './containers/headerContainer';

import './assets/style/common.css';
import './assets/style/fonts.css';
import './assets/style/normalize.css';
import './assets/style/reset.css';

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
