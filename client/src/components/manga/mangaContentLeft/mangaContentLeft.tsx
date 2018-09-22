import * as React from 'react'

import Card from '../../common/card';
import MangaActions from '../mangaActions';
import MangaInfo from '../mangaInfo';
import Sticky from '../../common/sticky';

import items from '../../../constants/mangaActions';
import { chaptersAndVolumes, mangaInfo } from '../mangaContent/testData';

class MangaContentLeft extends React.PureComponent {
  render() {
    return (
      <div className="manga__content-left">
        <Card>
            <MangaActions items = { items } />
        </Card>

        <Card title = 'Ongoing'>
            <MangaInfo items = { mangaInfo } chAVol={ chaptersAndVolumes } />
        </Card>
      </div>
    )
  }
}

class StickyMangaContentLeft extends React.PureComponent {
  render() {
    return ( 
      <Sticky>
        <MangaContentLeft /> 
      </Sticky>
    )
  }
}

export default MangaContentLeft;
export {
  MangaContentLeft,
  StickyMangaContentLeft
}
