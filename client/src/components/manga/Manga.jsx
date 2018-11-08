import * as React from 'react';

import MangaHeader from './mangaHeader';
import { MangaContentWithWrapper } from './mangaContent';

import './style/index.scss';

class Manga extends React.Component {
    render() {
        return(
            <div className = 'manga'>
                <div className = 'manga__hero' style = { { backgroundImage: `url(${ this.props.heroUrl }` } }></div>
                <MangaHeader />
                <MangaContentWithWrapper/>
            </div>
        );
    }
}

export default Manga;