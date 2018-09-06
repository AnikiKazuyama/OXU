import * as React from 'react';

import Manga from '../../components/manga';
import * as Image from '../../assets/img/manga.png';

class MangaContainer extends React.Component<{},{}> {
    public render() {
        return(
            <Manga heroUrl = { Image }/>
        );
    }
}

export default MangaContainer;