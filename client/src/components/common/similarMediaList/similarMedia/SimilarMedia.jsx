import * as React from 'react';
import Img from '../../image';

import stringUtils from '../../../../utils/StringUtils';

class SimilarMedia extends React.Component {
    
    render() {

        const {
            img, 
            title, 
            status, 
            views, 
            chapters
        } = this.props;

        return(
            <a className="similar-media__item" href=''>
                <Img className="similar-media__img" src={ img.src } alt={ img.src }/>
            
                <div className="similar-media__description">
                    <div className="similar-media__title">{ stringUtils.stringSlice(title, 20) }</div>
                    <div className="similar-media__status">{ status }</div>
                    <div className="similar-media__chapters">{ chapters } ch.</div>
                    <div className="similar-media__views">{ stringUtils.decorateNumber(views) } views</div>
                </div>
            </a>
        );
    }
}

export default SimilarMedia;