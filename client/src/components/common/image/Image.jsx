import * as React from 'react';

class Image extends React.Component {

    constructor(props) {
        super(props);

        this.image = React.createRef();
        this.imageSrc = require('./img/default.png');
    }

    render() {
        const {
            className, 
            src = '', 
            alt, 
        } = this.props;
    
        return(
            <img className = { className } 
                 src = { src } 
                 alt = { alt } 
                 ref = { this.image } 
                 onError = { this.handleImageError } 
                 onLoad = { this.handleImageLoad }
                 onClick = { this.props.onClick }/>
        );
    }

    handleImageError = (event) => {
        const { defaultImg, errorClassName = '' } = this.props;

        event.target.src = defaultImg ? defaultImg : this.imageSrc;

        if (errorClassName != '')
            event.target.classList.add(errorClassName);
    }

    handleImageLoad = (event) => {
        const { errorClassName = '', onLoad } = this.props;
        
        if (errorClassName != '')
            event.target.classList.remove(errorClassName);
        
        if (onload)
            onLoad(event);
    }

}


export default Image;