import React from 'react';

import Image from '../../../common/image';
import { ButtonTag } from '../../../common/button';

function MangaHeader(props) {
  const { title, description, genres, poster } = props;

  function renderGenres() {
    return genres.map(genre => (<ButtonTag as="a" key={genre.id}>{genre.name}</ButtonTag>));
  }

  return (
    <div className="manga__header">
      <div className="wrapper">
        <div className="manga__header-container">
          <div className="manga__header-image">
            <Image src={poster} alt="Название" />
          </div>
          <div className="manga__header-content">
            <h2 className="manga__header-title">{ title }</h2>
            <span className="manga__header-description">{ description }</span>
            <div className="manga__header-tags">
              { renderGenres() }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaHeader;
