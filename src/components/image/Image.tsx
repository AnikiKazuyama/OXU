import * as React from 'react';

import IImageP from './IImageP';
import IImageS from './IImageS';

class Image extends React.Component<IImageP,IImageS> {

    private image =  React.createRef<HTMLImageElement>();
    private imageSrc = require('./img/default.png');

    public render() {
        const {
            className, 
            src, 
            alt
        } = this.props;

        return(
            <img className = { className } src = { src } alt = { alt } ref = { this.image } onError = { this.handleImageError }/>
        );
    }

    private handleImageError = (event:any) => {
        const { defaultImg, errorClassName = '' } = this.props;

        event.target.src = defaultImg ? defaultImg : this.imageSrc;
        event.target.classList.add(errorClassName);
    }
}

export default Image;