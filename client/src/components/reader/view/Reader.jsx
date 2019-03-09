import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReaderImage from '../components/readerImage';
import StyleUtils from '../../../utils/styleUtils';

import '../resources/style/index.scss';

class Reader extends Component {
  static defaultProps = {
    title: '-',
    src: '',
    nextPage: '',
    prevPage: '',
    pageCount: 0,
    onImageClick: () => {},
    match: {
      params: {
        page: 0
      }
    }
  }

  static propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    nextPage: PropTypes.number,
    prevPage: PropTypes.number,
    pageCount: PropTypes.number,
    onImageClick: PropTypes.func,
    match: PropTypes.shape({
      params: PropTypes.shape({
        page: PropTypes.string
      })
    })
  }

  componentDidMount() {
    StyleUtils.toggleBodyReaderStyle();
  }

  componentWillUnmount() {
    StyleUtils.toggleBodyReaderStyle();
  }

  handleImageClick = () => {
    const {
      match: { params: { page } },
      pageCount,
      onImageClick
    } = this.props;

    onImageClick(page, pageCount);
  }

  render() {
    const {
      match: { params: { page } },
      title,
      src,
      pageCount,
      nextPage,
      prevPage
    } = this.props;
    return (
      <div className="reader">
        <Link to={`${prevPage}`} className="reader__side reader__side--left">
          <div className="reader__arrow reader__arrow--left" />
        </Link>
        <div className="reader__container">
          <ReaderImage
            alt={title}
            src={src}
            className="reader__image"
            errorClassName="reader__image--error"
            onClick={this.handleImageClick}
          />
          <div className="reader__pages">{ `${page}/${pageCount}` }</div>
        </div>

        <Link to={`${nextPage}`} className="reader__side reader__side--right">
          <div className="reader__arrow reader__arrow--right" />
        </Link>
      </div>
    );
  }
}

export default withRouter(Reader);
