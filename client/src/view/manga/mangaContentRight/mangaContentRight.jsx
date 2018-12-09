import React from 'react';

import Card from '../../common/card';
import SimilarMediaList from '../../common/similarMediaList';

import { similarManga } from '../mangaContent/testData';

function MangaContentRight() {
  return (
    <div className="manga__content-right">
      <Card title="Similar" shadow>
        <SimilarMediaList items={similarManga} />
      </Card>
    </div>
  );
}

export default MangaContentRight;
