import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

class Card extends Component {
  static defaultProps = {
    title: '',
    children: null
  }

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
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
    return (
      <div className="card">
        { this.renderTitle() }
        { this.props.children }
      </div>
    );
  }
}

export default Card;
