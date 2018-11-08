import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import ReaderContainer from '../../../containers/readerContainer';

class ReaderRoute extends React.Component {
    render() {
        return(
            <Switch>
                <Route path = {`${this.props.match.url}/:mangaName/:number/:page`}component = { ReaderContainer }/>
                <Route render = { () => <div>404040</div> }/>
            </Switch>
        );
    }
}

export default ReaderRoute;