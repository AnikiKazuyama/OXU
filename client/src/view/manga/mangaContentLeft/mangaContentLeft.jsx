import React from 'react';

import Card from '../../common/card';
import MangaActions from '../mangaActions';
import MangaInfo from '../mangaInfo';
import Sticky from '../../common/sticky';

import items from '../../../constants/mangaActions';
import { chaptersAndVolumes, mangaInfo } from '../mangaContent/testData';

function MangaContentLeft() {
  return (
    <div className="manga__content-left">
      <Card shadow>
        <MangaActions items={items} />
      </Card>

      <Card title="Ongoing" shadow>
        <MangaInfo items={mangaInfo} chAVol={chaptersAndVolumes} />
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
