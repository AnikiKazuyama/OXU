import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CatalogContainer from '../../../containers/catalogContainer';
import MangaRoute from '../../manga/mangaRoute';
import notFound from '../notFound';

function MainRoute() {
  return (
    <Switch>
      <Route exact path="/catalog" component={CatalogContainer} />
      <Route exact path="/manga" component={MangaRoute} />
      <Route component={notFound} />
    </Switch>
  );
}

export default MainRoute;
