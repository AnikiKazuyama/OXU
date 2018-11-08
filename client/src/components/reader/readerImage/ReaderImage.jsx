import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ReadImage from '../../common/image';

class ReaderImage extends Component {
  state = {
    isWeb: false,
    isLoaded: false,
    isVertical: false
  }

  componentDidMount() {
    this.initEvents();
    this.initImage(this.props.src);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        isWeb: false,
        isLoaded: false,
        isVertical: false
      });
      this.initImage(nextProps.src);
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  handleImageLoad = (event) => {
    const MAX_RATIO = 3;
    const image = event.target;
    const imageRatio = image.naturalHeight / image.naturalWidth;
    this.setState({
      isWeb: imageRatio > MAX_RATIO,
      isLoaded: true
    });
  }

  handleArrowPress = (e) => {
    switch (e.keyCode) {
      case 32:
        this.setState(prevState => ({
          isVertical: !prevState.isVertical
        }));
        e.preventDefault();
        e.stopPropagation();
        break;
      default: break;
    }
  }

  initImage(src) {
    const image = new Image();
    image.onload = this.handleImageLoad;
    image.src = src;
  }

  initEvents() {
    document.addEventListener('keydown', this.handleArrowPress);
  }

  removeEvents() {
    document.removeEventListener('keydown', this.handleArrowPress);
  }

  render() {
    const { isVertical } = this.state;
    const className = this.props.className + (this.state.isWeb ? ' reader__image--web' : '')
                                            + (isVertical ? ' reader__image--vertical' : '');
    if (this.state.isLoaded) {
      return (
        <ReadImage {...this.props} className={className} />
      );
    }

    return (
      <div className="reader__image-loader" />
    );
  }
}

export default withRouter(ReaderImage);
