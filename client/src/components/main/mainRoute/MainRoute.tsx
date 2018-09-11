import * as React from 'react';

import { Switch, Route } from 'react-router-dom';

import CatalogContainer from '../../../containers/catalogContainer';
import MangaRoute from '../../manga/mangaRoute';

class MainRoute extends React.Component<{},{}> {
    public render() {
        return(
            <Switch>
                <Route exact path = '/catalog' component = { CatalogContainer }/>
                <Route exact path = '/manga' component = { MangaRoute }/>
                <Route  render = { () => <div>404</div> }/>
            </Switch>
        );
    }
}

export default MainRoute;