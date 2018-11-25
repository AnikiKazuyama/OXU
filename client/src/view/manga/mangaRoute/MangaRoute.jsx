import React from 'react';
import { Route } from 'react-router-dom';

import MangaContainer from '../../../containers/mangaContainer';

function MangaRoute() {
  return (
    <Route path="/manga" component={MangaContainer} />
  );
}

export default MangaRoute;
