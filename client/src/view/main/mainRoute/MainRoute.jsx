import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CatalogContainer from '../../../containers/catalogContainer';
import ProfileContainer from '../../../containers/profileContainer';
import MangaRoute from '../../manga/mangaRoute';
import ReaderRoute from '../../reader/readerRoute';
import notFound from '../notFound';

function MainRoute() {
  return (
    <Switch>
      <Route exact path="/catalog" component={CatalogContainer} />
      <Route exact path="/im" component={ProfileContainer} />
      <Route exact path="/read" component={ReaderRoute} />
      <Route path="/manga" component={MangaRoute} />
      <Route component={notFound} />
    </Switch>
  );
}

export default MainRoute;
