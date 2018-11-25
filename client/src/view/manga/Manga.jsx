import React from 'react';
import PropTypes from 'prop-types';

import MangaHeader from './mangaHeader';
import MangaContentLeft from './mangaContentLeft';
import MangaContentCenter from './mangaContentCenter';

import withWrapper from '../../HOC/withWrapper';

import Hero from '../common/hero';
import MangaContent from '../common/panel';

import './style/index.scss';

const MangaContentWithWrapper = withWrapper(MangaContent);

function Manga(props) {
  const { heroUrl } = props;

  return (
    <div className="manga">
      <Hero url={heroUrl} />
      <MangaHeader />
      <MangaContentWithWrapper
        containerClassName="manga__content"
        left={<MangaContentLeft />}
        center={<MangaContentCenter />}
      />
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
