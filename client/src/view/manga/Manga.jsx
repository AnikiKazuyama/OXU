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
  const { heroUrl, manga } = props;
  const {
    genres,
    title,
    description,
    poster,
    views,
    date,
    author,
    magazine,
    chapters,
    volumes,
    status,
    id
  } = manga;

  return (
    <div className="manga">
      <Hero url={heroUrl} />
      <MangaHeader
        genres={genres}
        title={title}
        description={description}
        poster={poster}
      />
      <MangaContentWithWrapper
        containerClassName="manga__content"
        left={(
          <MangaContentLeft
            views={views}
            date={date}
            genres={genres}
            author={author}
            magazine={magazine}
            chapters={chapters}
            volumes={volumes}
            status={status}
            id={id}
          />
        )}
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
