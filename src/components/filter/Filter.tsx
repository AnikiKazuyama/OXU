import * as React from 'react';

import './style/index.css';

class Filter extends React.Component {
  public render() {
    return(
        <div className="filter">
           { this.boundChildren() }
        </div>
    );
  }

  public boundChildren() {
      return React.Children.map(this.props.children , ( child: React.ReactChild ) => {
        return child;
      });
  }

}

export default Filter;