import * as React from 'react'

import Card from '../../common/card';
import MangaActions from '../mangaActions';
import MangaInfo from '../mangaInfo';

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

export default MangaContentLeft;
