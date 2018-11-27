import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style/index.scss';

class Navigation extends Component {
  static defaultProps = {
    items: [],
    onNavigation: () => {},
    isHorizontal: false,
    className: '',
    itemClassName: ''
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string
    })),
    onNavigation: PropTypes.func,
    isHorizontal: PropTypes.bool,
    className: PropTypes.string,
    itemClassName: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      activeId: this.props.items.length !== 0 ? this.props.items[0].id : 0
    };
  }

  handleClick(id) {
    this.setState({
      activeId: id
    });

    this.props.onNavigation(id);
  }

  renderNavItems() {
    const { itemClassName } = this.props;

    return this.props.items.map((item) => {
      return (
        <li>
          <NavLink
            exact={item.exact}
            to={item.href}
            tabIndex="0"
            activeClassName="navigation__item--active"
            className={`${itemClassName} navigation__item`}
            key={item.id}
            onClick={() => this.handleClick(item.id)}
            role="button"
          >
            { item.text }
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const { isHorizontal, className } = this.props;

    return (
      <ul className={`navigation ${isHorizontal ? 'navigation--horizontal' : ''} ${className}`}>
        { this.renderNavItems() }
      </ul>
    );
  }
}

export default Navigation;
