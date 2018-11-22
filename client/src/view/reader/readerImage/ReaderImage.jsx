import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReaderScroll from '../readerScroll';

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

  componentWillUnmount() {
    this.removeEvents();
  }

  getDerivedStateFromProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        isWeb: false,
        isLoaded: false,
        isVertical: false
      });
      this.initImage(nextProps.src);
    }
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
        <ReaderScroll>
          <ReadImage {...this.props} className={className} />
        </ReaderScroll>
      );
    }

    return (
      <ReaderScroll>
        <div className="reader__image-loader" />
      </ReaderScroll>
    );
  }
}

export default withRouter(ReaderImage);
