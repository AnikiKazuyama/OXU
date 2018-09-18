import * as React from 'react';
import IMangaInfoP from './IMangaInfoP';

class MangaInfo extends React.Component<IMangaInfoP, {}> {
    public render() {
        return(
            <React.Fragment>
                <div className="manga__ch-vol">
                    <div className="manga__ch"><span className="manga__ch-vol--lg" data-desc="ch">{ this.props.chAVol.ch }</span></div>
                    <div className="manga__vol"><span className="manga__ch-vol--lg" data-desc="vol">{ this.props.chAVol.vol }</span></div>
                </div>
                <div className="manga__info">
                    { this.renderInfo() }
                </div>
            </React.Fragment>
        );
    }

    renderInfo() {
        return this.props.items.map(( item, index ) => {
            return (
                <div className="manga__info-item" key={ index }>
                    <div className="manga__info-title">{ item.title }</div>
                    <div className="manga__info-description">{ item.description }</div>
                </div>
            );
        });
    }
}

export default MangaInfo;