import * as React from 'react';

import MangaContentCenter from '../mangaContentCenter';
import MangaActions from '../mangaActions';
import MangaInfo from '../mangaInfo';

import SimilarMediaList from '../../common/similarMediaList';
import Card from '../../common/card';

import items from '../../../constants/mangaActions';
import { chaptersAndVolumes, similarManga, mangaInfo } from './testData';

class MangaContent extends React.Component<{},{}> {
    public render() {
        return(
            <div className = "manga__content">
                <div className="manga__content-left">
                    <Card>
                        <MangaActions items = { items } />
                    </Card>
                    <Card title = 'Ongoing'>
                        <MangaInfo items = { mangaInfo } chAVol={ chaptersAndVolumes } />
                    </Card>
                </div>
                <MangaContentCenter />
                <div className="manga__content-right">
                    <Card title="Similar">
                        <SimilarMediaList items={ similarManga }/>
                    </Card>
                </div>
            </div>
        );
    }
}

class MangaContentWithWrapper extends React.Component<{},{}> {
    render() {
        return (
            <div className="wrapper">
                <MangaContent { ...this.props } />
            </div>
        );
    }
}

export default MangaContent;

export {
    MangaContentWithWrapper
}