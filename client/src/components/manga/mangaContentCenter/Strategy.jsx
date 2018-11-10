import React from 'react';
import PropTypes from 'prop-types';

import Chapters from './chapters';
import Reviews from './reviews';

import Types from '../../../constants/manga/mangaContentCenter';

const MangaComments = props => (
  <div className={props.className}>Comments</div>
);

MangaComments.propTypes = {
  className: PropTypes.string
};

MangaComments.defaultProps = {
  className: ''
};

class MangaContentFactory {
  static get(type) {
    if (Object.prototype.hasOwnProperty.call(Types, type)) {
      if (type === Types.comments) {
        return MangaComments;
      }

      if (type === Types.chapters) {
        return props => <Chapters {...props} />;
      }

      if (type === Types.reviews) {
        return props => <Reviews {...props} />;
      }
    }
    return () => null;
  }
}

export default MangaContentFactory;
