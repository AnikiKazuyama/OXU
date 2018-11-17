import React from 'react';

import Chapters from './chapters';
import Reviews from './reviews';
import Comments from '../../../containers/commentsContainer';

import Types from '../../../constants/manga/mangaContentCenter';

class MangaContentFactory {
  static get(type) {
    if (Object.prototype.hasOwnProperty.call(Types, type)) {
      if (type === Types.comments) {
        return props => <Comments {...props} />;
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
