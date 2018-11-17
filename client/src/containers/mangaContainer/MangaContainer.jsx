import React from 'react';

import Manga from '../../view/manga';
import Image from '../../assets/img/manga.png';

function MangaContainer() {
  return (
    <Manga heroUrl={Image} />
  );
}

export default MangaContainer;
