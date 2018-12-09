import React, { Component } from 'react';
import PropTypes from 'prop-types';

import clientDefaultImage from './img/default.png';

class Image extends Component {
  static defaultProps = {
    errorClassName: '',
    className: '',
    src: '',
    alt: '',
    defaultImg: clientDefaultImage,
    onLoad: () => {},
    onClick: () => {}
  }

  static propTypes = {
    defaultImg: PropTypes.string,
    errorClassName: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    onLoad: PropTypes.func,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.image = React.createRef();
  }

  handleImageError = (e) => {
    const event = e;
    const { defaultImg, errorClassName } = this.props;

    event.target.src = defaultImg;

    if (errorClassName !== '') {
      event.target.classList.add(errorClassName);
    }
  }

  handleImageLoad = (e) => {
    const event = e;
    const { errorClassName, onLoad } = this.props;

    if (errorClassName !== '') {
      event.target.classList.remove(errorClassName);
    }

    onLoad(event);
  }

  render() {
    const {
      className,
      src,
      alt,
      onClick
    } = this.props;

    return (
      <div className="cover" onClick={onClick} tabIndex="0" role="button">
        <img
          className={className}
          src={src}
          alt={alt}
          ref={this.image}
          onError={this.handleImageError}
          onLoad={this.handleImageLoad}
        />
      </div>
    );
  }
}

export default Image;
