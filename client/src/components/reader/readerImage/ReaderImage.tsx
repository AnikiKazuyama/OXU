import * as React from 'react';
import { withRouter } from 'react-router-dom';

import IReaderImageP from './IReaderImageP';
import IReaderImageS from './IReaderImageS';
import ReadImage from '../../common/image';

class ReaderImage extends React.Component<IReaderImageP, IReaderImageS> {

    public state = {
        isWeb: false, 
        isLoaded: false,
        isVertical: false
    }

    public componentDidMount() {
        this.initEvents();
        this.initImage(this.props.src);
    }

    public componentWillReceiveProps(nextProps: IReaderImageP) {
        if (nextProps.location.pathname != this.props.location.pathname) {
            this.setState({
                isWeb: false,
                isLoaded: false,
                isVertical: false
            });
            this.initImage(nextProps.src);
        }
    }

    public componentWillUnmount() {
        this.removeEvents();
    }

    public render() {
        const { isVertical } = this.state;
        const className = this.props.className + (this.state.isWeb ? ' reader__image--web' : '') 
                                               + (isVertical ? ' reader__image--vertical' : '');
        if (this.state.isLoaded)
            return(
                <ReadImage { ...this.props } className = { className } />
            ); 
        else
            return(
                <div className = 'reader__image-loader' />
            ); 
    }

    private handleImageLoad = (event: any): any => {
        const MAX_RATIO = 3;
        const image: HTMLImageElement = event.target;
        const imageRatio = image.naturalHeight / image.naturalWidth;
        this.setState({
            isWeb: imageRatio > MAX_RATIO,
            isLoaded: true
        })
    }

    private initImage(src: string) {
        const image = new Image();
        image.onload = this.handleImageLoad;
        image.src = src;
    }

    private handleArrowPress = (e: KeyboardEvent) => {
        switch(e.keyCode) {
            case 32: 
                this.setState(( prevState ) => {
                     return {
                         isVertical: !prevState.isVertical
                     }
                });
                e.preventDefault();
                e.stopPropagation();
                break;
        }
    }

    private initEvents() {
        document.addEventListener('keydown', this.handleArrowPress);
    }

    private removeEvents() {
        document.removeEventListener('keydown', this.handleArrowPress);
    }
}

export default withRouter(ReaderImage);