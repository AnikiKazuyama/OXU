import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

class Sticky extends Component {
  static defaultProps = {
    offsetBottom: 0,
    offsetTop: 0,
    children: null
  }

  static propTypes = {
    children: PropTypes.node,
    offsetBottom: PropTypes.number,
    offsetTop: PropTypes.number
  }

  constructor(props) {
    super(props);

    this.stickedTop = false;
    this.stickedBottom = false;
    this.STICKY_CLASS = 'sticky';
    this.stickyState = {
      REMOVE_TOP: 'remove-top',
      REMOVE_BOTTOM: 'remove-bottom',
      SET_TOP: 'set-top',
      SET_BOTTOM: 'set-bottom',
      NONE: 'none'
    };
    this.sticky = React.createRef();
  }

  componentDidMount() {
    this.initSticky();
  }

  getCurrentStickyState = (container) => {
    const margin = container.style.marginTop ? parseInt(container.style.marginTop.replace('px', ''), 10) : 0;
    if (window.innerHeight > container.firstElementChild.clientHeight) {
      if (window.pageYOffset > container.clientTop) {
        return this.stickyState.SET_TOP;
      }
      return this.stickyState.REMOVE_TOP;
    }

    if (this.currentScrollPos - window.pageYOffset <= 0) {
      if (!this.stickedTop && !this.stickedBottom
        && (window.pageYOffset + window.innerHeight
          - this.props.offsetTop - this.props.offsetBottom)
        > margin + container.firstElementChild.clientHeight) {
        return this.stickyState.SET_BOTTOM;
      } if (this.stickedTop) {
        return this.stickyState.REMOVE_TOP;
      }
      return this.stickyState.NONE;
    }

    if (this.stickedBottom) {
      return this.stickyState.REMOVE_BOTTOM;
    }

    if (!this.stickedBottom && !this.stickedTop && window.pageYOffset < margin) {
      return this.stickyState.SET_TOP;
    }

    if (window.pageYOffset === margin) {
      return this.stickyState.REMOVE_TOP;
    }

    return this.stickyState.NONE;
  }

  setCurrentStickyState = () => {
    const container = this.sticky.current;
    switch (this.getCurrentStickyState(container)) {
      case this.stickyState.SET_TOP:
        this.setTopSticky(container);
        break;
      case this.stickyState.SET_BOTTOM:
        this.setBottomSticky(container);
        break;
      case this.stickyState.REMOVE_TOP:
        this.removeTopSticky(container);
        break;
      case this.stickyState.REMOVE_BOTTOM:
        this.removeBottomSticky(container);
        break;
      default: break;
    }

    this.currentScrollPos = window.pageYOffset;
  }

  setTopSticky = (container) => {
    const sticky = container;
    sticky.classList.add(this.STICKY_CLASS);
    sticky.style.top = `${this.props.offsetTop}px`;
    sticky.style.bottom = '';
    sticky.style.marginTop = '';
    this.stickedTop = true;
    this.stickedBottom = false;
  }

  setBottomSticky(container) {
    const sticky = container;
    sticky.classList.add(this.STICKY_CLASS);
    sticky.style.bottom = `${this.props.offsetBottom}px`;
    sticky.style.top = '';
    sticky.style.marginTop = '';
    this.stickedBottom = true;
    this.stickedTop = false;
  }

  initSticky = () => {
    this.currentScrollPos = window.pageYOffset;
    document.addEventListener('scroll', this.setCurrentStickyState);
    this.setCurrentStickyState();
  }

  setTopMargin = (container) => {
    const sticky = container;
    sticky.style.marginTop = `${window.pageYOffset + container.offsetTop - this.props.offsetTop}px`;
  }

  removeTopSticky(container) {
    const sticky = container;
    this.setTopMargin(container);
    sticky.classList.remove(this.STICKY_CLASS);
    sticky.style.top = '';
    this.stickedTop = false;
  }

  removeBottomSticky(container) {
    const sticky = container;
    this.setTopMargin(container);
    sticky.classList.remove(this.STICKY_CLASS);
    sticky.style.bottom = '';
    this.stickedBottom = false;
  }

  render() {
    return (
      <div className="sticky-content" ref={this.sticky}>
        { this.props.children }
      </div>
    );
  }
}

export default Sticky;
