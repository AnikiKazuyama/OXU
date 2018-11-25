import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style/index.scss';

class Navigation extends Component {
  static defaultProps = {
    items: [],
    onNavigation: () => {},
    isHorizontal: false
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string
    })),
    onNavigation: PropTypes.func,
    isHorizontal: PropTypes.bool
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
    return this.props.items.map((item) => {
      return (
        <NavLink
          exact
          to={item.href}
          tabIndex="0"
          activeClassName="navigation__item--active"
          className="navigation__item"
          key={item.id}
          onClick={() => this.handleClick(item.id)}
          role="button"
        >
          { item.text }
        </NavLink>
      );
    });
  }

  render() {
    const {isHorizontal} = this.props;

    return (
      <nav className={`navigation ${isHorizontal ? 'navigation--horizontal' : ''}`}>
        { this.renderNavItems() }
      </nav>
    );
  }
}

export default Navigation;
