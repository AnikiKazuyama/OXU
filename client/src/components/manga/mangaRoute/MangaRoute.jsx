import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MangaContainer from '../../../containers/mangaContainer';

function MangaRoute() {
  return (
    <Switch>
      <Route exact path="/:id" component={MangaContainer} />
    </Switch>
  );
}

export default MangaRoute;
