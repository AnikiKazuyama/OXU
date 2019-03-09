import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './resources/style/index.scss';

class Dropdown extends Component {
  static defaultProps = {
    items: [],
    children: null
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string
    })),
    children: PropTypes.node
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.height = 0;
    this.menu = React.createRef();
    this.toggler = React.createRef();
  }

  componentDidMount() {
    this.initEvent();
    this.height = this.calcHeight();
  }

  componentWillUnmount() {
    this.removeEvent();
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  handleOutClick = (event) => {
    const menu = this.menu.current;
    const toggler = this.toggler.current;

    if (!menu.contains(event.target)
      && !toggler.contains(event.target)
      && this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    }
  }

  calcHeight() {
    const menu = this.menu.current;

    let height = 0;
    for (let i = 0; i < menu.childElementCount; i++) {
      height += menu.children[i].clientHeight;
    }
    return height;
  }

  initEvent() {
    const { body } = document;

    body.addEventListener('click', this.handleOutClick);
  }

  removeEvent() {
    const { body } = document;

    body.removeEventListener('click', this.handleOutClick);
  }

  renderSeparator(isSeparated) {
    if (isSeparated) {
      return (
        <div className="dropdown__item-separator" />
      );
    }

    return null;
  }

  renderMenu() {
    const { items } = this.props;

    return items.map(item => (
      <Fragment key={item.name}>
        <Link 
          className="dropdown__item"
          to={item.link}
          onClick={this.toggleMenu}
        >
          { item.name }
        </Link>
        { this.renderSeparator(item.isSeparate) }
      </Fragment>
    ));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="dropdown">
        <div className="dropdown__toggle" onClick={this.toggleMenu} ref={this.toggler} tabIndex="0" role="button">
          { this.props.children }
        </div>
        <div
          className={`dropdown__menu${isOpen ? ' dropdown__menu--active' : ''}`}
          ref={this.menu}
        >
          { this.renderMenu() }
          <div className="dropdown__menu_triangle" />
        </div>
      </div>
    );
  }
}

export default Dropdown;
