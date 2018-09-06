import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import MangaContainer from '../../../containers/mangaContainer';

class MangaRoute extends React.Component<{},{}> {
    public render() {
        return(
            <Switch>
                <Route exact path = '/:id' component = { MangaContainer }/>
            </Switch>
        );
    }
}

export default MangaRoute;