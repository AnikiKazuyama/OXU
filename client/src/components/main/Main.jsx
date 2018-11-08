import * as React from 'react';

import MainRoute from './mainRoute';

import './style/index.scss';

class Main extends React.Component {
  render() {
    return(
      <main className = 'site-main'>
        <MainRoute />
      </main>
    );
  }
}

export default Main;