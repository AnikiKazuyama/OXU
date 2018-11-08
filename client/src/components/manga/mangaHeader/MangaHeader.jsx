import React from 'react';

import Image from '../../common/image';
import { ButtonTag } from '../../common/button';

function MangaHeader() {
  return (
    <div className="manga__header">
      <div className="wrapper">
        <div className="manga__header-container">
          <div className="manga__header-image">
            <Image src="http://img1.ak.crunchyroll.com/i/spire1/863ba423b729f58769a4004834e5554e1491069428_full.jpg" alt="Название" />
          </div>
          <div className="manga__header-content">
            <h2 className="manga__header-title">My Hero Academia</h2>
            <span className="manga__header-description">My Hero Academia is a superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014, and 19 volumes have been collected in tankōbon format.</span>
            <div className="manga__header-tags">
              <ButtonTag as="a">Action</ButtonTag>
              <ButtonTag as="a">Comedy</ButtonTag>
              <ButtonTag as="a">Fantasy</ButtonTag>
              <ButtonTag as="a">Game</ButtonTag>
              <ButtonTag as="a">Yaoi</ButtonTag>
              <ButtonTag as="a">Sport</ButtonTag>
              <ButtonTag as="a">School</ButtonTag>
              <ButtonTag as="a">Drama</ButtonTag>
              <ButtonTag as="a">Hentai</ButtonTag>
              <ButtonTag as="a">Fantastica</ButtonTag>
              <ButtonTag as="a">Drama</ButtonTag>
              <ButtonTag as="a">Hentai</ButtonTag>
              <ButtonTag as="a">Fantastica</ButtonTag>
              <ButtonTag as="a">Drama</ButtonTag>
              <ButtonTag as="a">Hentai</ButtonTag>
              <ButtonTag as="a">Fantastica</ButtonTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaHeader;
