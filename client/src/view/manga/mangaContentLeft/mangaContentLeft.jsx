import React from 'react';

import Card from '../../common/card';
import MangaActions from '../mangaActions';
import MangaInfo from '../mangaInfo';
import Sticky from '../../common/sticky';

import items from '../../../constants/mangaActions';
import { chaptersAndVolumes, mangaInfo } from '../mangaContent/testData';

function MangaContentLeft(props) {
  const { chapters, volumes, status, id } = props;

  function getMangaInfo() {
    return mangaInfo(props);
  }

  return (
    <div className="manga__content-left">
      <Card shadow>
        <MangaActions items={items} id={id} />
      </Card>

      <Card title={status} shadow>
        <MangaInfo
          items={getMangaInfo()}
          chapters={chapters}
          volumes={volumes}
        />
      </Card>
    </div>
  );
}

function StickyMangaContentLeft() {
  return (
    <Sticky>
      <MangaContentLeft />
    </Sticky>
  );
}

export default MangaContentLeft;
export {
  MangaContentLeft,
  StickyMangaContentLeft
};
