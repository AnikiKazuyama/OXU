import React from 'react';

import MangaContentLeft from '../mangaContentLeft';
import MangaContentCenter from '../mangaContentCenter';
// import MangaContentRight from '../mangaContentRight';

function MangaContent() {
  return (
    <div className="manga__content">
      <MangaContentLeft />
      <MangaContentCenter />
    </div>
  );
}

function MangaContentWithWrapper(props) {
  return (
    <div className="wrapper">
      <MangaContent {...props} />
    </div>
  );
}

export default MangaContent;
export {
  MangaContentWithWrapper
};
