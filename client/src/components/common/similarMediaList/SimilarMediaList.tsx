import * as React from 'react';
import SimilarMedia from './similarMedia';

import IsimilarMediaListP from './IsimilarMediaListP';

import './style/index.scss';

class SimilarMediaList extends React.Component<IsimilarMediaListP, {}> {
    public render() {
        return (
            <div className="similar-media">
                { this.renderList() }
            </div>
        );
    }

    renderList() {
        return this.props.items.map((item, index) => {
            return (
                <SimilarMedia key={ index } { ...item }/>
            );
        })
    }
}

export default SimilarMediaList;