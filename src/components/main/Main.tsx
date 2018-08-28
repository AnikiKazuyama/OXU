import * as React from 'react';

import CatalogContainer from '../../containers/CatalogContainer';

import './style/index.scss';

class Main extends React.Component {
  public render() {
    return(
      <main className = 'site-main'>
        <div className = 'wrapper'>
          <CatalogContainer/>
        </div>
      </main>
    );
  }
}

export default Main;