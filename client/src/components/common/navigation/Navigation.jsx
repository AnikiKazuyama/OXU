import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavItem from './components/navItem';

import './resources/style/index.scss';

class Navigation extends Component {
  static defaultProps = {
    horizontal: false,
    className: '',
    children: null,
    center: false
  }

  static propTypes = {
    horizontal: PropTypes.bool,
    className: PropTypes.string,
    center: PropTypes.bool,
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
    const {
      horizontal,
      className,
      center,
      children
    } = this.props;

    const centerClassName = center ? 'navigation--center' : '';

    return (
      <ul className={`navigation ${horizontal ? 'navigation--horizontal' : ''} ${className} ${centerClassName}`}>
        { children }
      </ul>
    );
  }
}

export default Navigation;
