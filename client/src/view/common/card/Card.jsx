import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

class Card extends Component {
  static defaultProps = {
    className: '',
    title: '',
    children: null,
    shadow: false
  }

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    shadow: PropTypes.bool
  }

  title() {
    const { title } = this.props;

    return (
      <div className="card__title">
        { title }
      </div>
    );
  }

  renderTitle() {
    const { title } = this.props;

    return title ? this.title() : null;
  }

  render() {
    const { className, shadow } = this.props;
    const editedClassName = shadow ? `card--shadow ${className}` : `${className}`;

    return (
      <div className={`card ${editedClassName}`}>
        { this.renderTitle() }
        { this.props.children }
      </div>
    );
  }
}

export default Card;
