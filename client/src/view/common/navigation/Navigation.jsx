import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavItem from './navItem';

import './style/index.scss';

class Navigation extends Component {
  static defaultProps = {
    horizontal: false,
    className: '',
    children: null
  }

  static propTypes = {
    horizontal: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
  }

  static renderItems = (items, className = '') => (
    items.map(item => (
      <NavItem
        key={item.id}
        exact={item.exact}
        href={item.href}
        className={className}
      >
        { item.content }
      </NavItem>
    ))
  )

  render() {
    const { horizontal, className, children } = this.props;

    return (
      <ul className={`navigation ${horizontal ? 'navigation--horizontal' : ''} ${className}`}>
        { children }
      </ul>
    );
  }
}

export default Navigation;
