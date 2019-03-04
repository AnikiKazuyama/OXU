import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CatalogContainer from '../../../containers/catalogContainer';
import ProfileContainer from '../../../containers/profileContainer';
import MangaRoute from '../../manga/mangaRoute';
import ReaderRoute from '../../reader/readerRoute';
import notFound from '../notFound';
import MangaContainer from '../../../containers/mangaContainer';

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
