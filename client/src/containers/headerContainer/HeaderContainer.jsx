import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../view/header';

function HeaderContainer(props) {
  return (
    <Switch>
      <Route path='/read' component={ null } />
      <Route path='/' render={() => <Header {...props} /> } />
      <Route component={() => null} />
    </Switch>
  );
}

export default HeaderContainer;
