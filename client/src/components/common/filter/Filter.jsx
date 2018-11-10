import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

class Filter extends Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  boundChildren() {
    return React.Children.map(this.props.children, child => child);
  }

  render() {
    return (
      <div className="filter clearfix">
        { this.boundChildren() }
      </div>
    );
  }
}

export default Filter;
