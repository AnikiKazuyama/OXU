import * as React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './components/main';
import HeaderContainer from './containers/headerContainer';
import ReaderContainer from './containers/readerContainer';

import './assets/style/common.scss';
import './assets/style/fonts.scss';
import './assets/style/normalize.scss';
import './assets/style/reset.scss';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path = '/read/:mangaName/:number/:page' component = { ReaderContainer }  />
        <Route path = '/' component = { () => 
          <React.Fragment>
            <HeaderContainer/>
            <Main/>   
          </React.Fragment>
        }/>
      </Switch>
    );
  }
}

export default App;
