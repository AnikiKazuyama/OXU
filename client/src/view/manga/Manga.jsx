import React from 'react';
import PropTypes from 'prop-types';

import MangaHeader from './mangaHeader';
import { MangaContentWithWrapper } from './mangaContent';

import './style/index.scss';

function Manga(props) {
  return (
    <div className="manga">
      <div
        className="manga__hero"
        style={{ backgroundImage: `url(${props.heroUrl})` }}
      />
      <MangaHeader />
      <MangaContentWithWrapper />
    </div>
  );
}

Manga.defaultProps = {
  heroUrl: ''
};

Manga.propTypes = {
  heroUrl: PropTypes.string
};

export default Manga;
