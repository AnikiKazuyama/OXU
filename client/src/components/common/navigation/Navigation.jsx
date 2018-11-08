import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

class Navigation extends Component {
  static defaultProps = {
    items: [],
    onNavigation: () => {}
  }

  static propTypes = {
    items: PropTypes.arrayOf,
    onNavigation: PropTypes.func
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
      const className = `navigation__item ${item.id === this.state.activeId ? 'navigation__item--active' : ''}`;
      return (
        <a
          tabIndex="0"
          className={className}
          key={item.id}
          onClick={() => this.handleClick(item.id)}
          role="button"
        >
          { item.text }
        </a>
      );
    });
  }

  render() {
    return (
      <nav className="navigation">
        { this.renderNavItems() }
      </nav>
    );
  }
}

export default Navigation;
