import React from 'react';
import { Route } from 'react-router-dom';

import MangaContainer from '../../../containers/mangaContainer';

function MangaRoute() {
  return (
    <Route exact path="/:id" component={MangaContainer} />
  );
}

export default MangaRoute;
