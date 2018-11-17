import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import StringUtils from '../../../../utils/stringUtils';
import Img from '../../image';

class SimilarMedia extends PureComponent {
  static defaultProps = {
    img: '',
    title: '-',
    status: '-',
    views: '0',
    chapters: '0'
  }

  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    views: PropTypes.string,
    chapters: PropTypes.string
  }

  render() {
    const {
      img,
      title,
      status,
      views,
      chapters
    } = this.props;

    return (
      <a className="similar-media__item" href="">
        <Img className="similar-media__img" src={img.src} alt={img.src} />

        <div className="similar-media__description">

          <div className="similar-media__title">
            { StringUtils.stringSlice(title, 20) }
          </div>

          <div className="similar-media__status">
            { status }
          </div>

          <div className="similar-media__chapters">
            { chapters }
            ch.
          </div>

          <div className="similar-media__views">
            { StringUtils.decorateNumber(views) }
            views
          </div>

        </div>
      </a>
    );
  }
}

export default SimilarMedia;
