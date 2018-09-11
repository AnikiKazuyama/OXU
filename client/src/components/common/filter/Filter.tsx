import * as React from 'react';

import './style/index.scss';

class Filter extends React.Component {
  public render() {
    return(
        <div className="filter clearfix">
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