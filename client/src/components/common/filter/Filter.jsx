import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './resources/style/index.scss';

class Filter extends Component {
  static defaultProps = {
    children: null,
    className: ''
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  boundChildren() {
    return React.Children.map(this.props.children, child => child);
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`filter clearfix ${className}`}>
        { this.boundChildren() }
      </div>
    );
  }
}

export default Filter;
