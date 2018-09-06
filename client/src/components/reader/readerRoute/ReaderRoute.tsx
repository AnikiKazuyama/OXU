import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import ReaderContainer from '../../../containers/readerContainer';
import IReaderRouteP from './IReaderRouteP';

class ReaderRoute extends React.Component<IReaderRouteP,{}> {
    public render() {
        console.log(this.props)
        return(
            <Switch>
                <Route path = {`${this.props.match.url}/:mangaName/:number/:page`}component = { ReaderContainer }/>
                <Route render = { () => <div>404040</div> }/>
            </Switch>
        );
    }
}

export default ReaderRoute;