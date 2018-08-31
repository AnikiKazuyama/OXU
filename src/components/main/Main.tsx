import * as React from 'react';

import { Switch, Route } from 'react-router-dom';

import CatalogContainer from '../../containers/catalogContainer';

import './style/index.scss';

class Main extends React.Component {
  public render() {
    return(
      <main className = 'site-main'>
        <div className = 'wrapper'>
          <Switch>
            <Route exact path = '/catalog' component = { CatalogContainer }/>
          </Switch>
        </div>
      </main>
    );
  }
}

export default Main;