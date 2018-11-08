import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReaderContainer from '../../../containers/readerContainer';

function ReaderRoute(props) {
  return (
    <Switch>
      <Route path={`${props.match.url}/:mangaName/:number/:page`} component={ReaderContainer} />
      <Route render={() => <div>404040</div>} />
    </Switch>
  );
}

ReaderRoute.defaultProps = {
  match: {
    url: ''
  }
};

ReaderRoute.propTypes = {
  match: {
    url: PropTypes.string
  }
};

export default ReaderRoute;
