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
    this.sticky = React.createRef();
  }

  componentDidMount() {
    this.currentScrollPos = window.pageYOffset;
    document.addEventListener('scroll', this.initSticky);
  }

  initSticky = () => {
    const container = this.sticky.current;
    if (window.innerHeight > container.firstElementChild.clientHeight) {
      if (window.pageYOffset > container.clientTop) {
        container.classList.add('sticky');
        container.style.top = `${this.props.offsetBottom}px`;
      } else {
        container.classList.remove('sticky');
        container.style.top = '';
      }
    } else {
      const margin = container.style.marginTop ? parseInt(container.style.marginTop.replace('px', ''), 10) : 0;
      if (this.currentScrollPos - window.pageYOffset < 0) {
        if (!this.stickedTop && !this.stickedBottom
          && (window.pageYOffset + window.innerHeight
            - this.props.offsetTop - this.props.offsetBottom)
          > margin + container.firstElementChild.clientHeight) {
          // console.log('Устанавливаем нижний стик');
          container.classList.add('sticky');
          container.style.bottom = `${this.props.offsetBottom}px`;
          container.style.top = '';
          container.style.marginTop = '';
          this.stickedBottom = true;
        } else if (this.stickedTop) {
          // console.log('Отменяем верхний стик');
          container.style.marginTop = `${window.pageYOffset + container.offsetTop - this.props.offsetTop}px`;
          container.classList.remove('sticky');
          container.style.top = '';
          this.stickedTop = false;
        }
      } else if (this.stickedBottom) {
        // console.log('Отменяем нижний стик');
        container.style.marginTop = `${window.pageYOffset + container.offsetTop - this.props.offsetTop}px`;
        container.classList.remove('sticky');
        container.style.bottom = '';
        this.stickedBottom = false;
      } else if (!this.stickedBottom && !this.stickedTop && window.pageYOffset < margin) {
        // console.log('Устанавливаем верхний стик');
        container.classList.add('sticky');
        container.style.top = `${this.props.offsetTop}px`;
        container.style.bottom = '';
        container.style.marginTop = '';
        this.stickedTop = true;
      } else if (window.pageYOffset === margin) {
        // console.log('Отменяем верхний стик');
        container.classList.remove('sticky');
        container.style.top = '';
        this.stickedTop = false;
      }
    }

    this.currentScrollPos = window.pageYOffset;
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
