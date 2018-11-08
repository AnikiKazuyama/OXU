import * as React from 'react'

import Card from '../../common/card';
import SimilarMediaList from '../../common/similarMediaList';

import { similarManga } from '../mangaContent/testData';

class MangaContentRight extends React.PureComponent {
  render() {
    return (
      <div className="manga__content-right">
        <Card title="Similar">
            <SimilarMediaList items={ similarManga }/>
        </Card>
      </div>
    )
  }
}

export default MangaContentRight;
