import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import ClampJs from 'clamp-js';

import './style/index.scss';

class Clamp extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);

    this.content = createRef();
  }

  componentDidMount() {
    const computedStyle = getComputedStyle(this.content.current.parentElement);
    let height = this.content.current.parentElement.clientHeight;
    height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    ClampJs(this.content.current, { clamp: `${height}px` });
  }

  render() {
    return (
      <span className="clamp" ref={this.content}>{ this.props.children }</span>
    );
  }
}

export default Clamp;
