import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CatalogContainer from '../../../catalog';
import ProfileContainer from '../../../profile';
import ReaderRoute from '../../../reader/routes/readerRoute';
import notFound from '../../components/notFound';
import MangaContainer from '../../../manga';

function MainRoute() {
  return (
    <Switch>
      <Route exact path="/catalog/:page" component={CatalogContainer} />
      <Route path="/catalog" component={CatalogContainer} />
      <Route exact path="/read" component={ReaderRoute} />
      <Route path="/im" component={ProfileContainer} />
      <Route path="/manga/:id" component={MangaContainer} />
      <Route component={notFound} />
    </Switch>
  );
}

export default MainRoute;
