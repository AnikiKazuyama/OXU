import * as React from 'react';

import MangaContentLeft from '../mangaContentLeft';
import MangaContentCenter from '../mangaContentCenter';
import MangaContentRight from '../mangaContentRight';

class MangaContent extends React.Component<{},{}> {
    public render() {
        return(
            <div className = "manga__content">
                <MangaContentLeft />
                <MangaContentCenter />
                <MangaContentRight />
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