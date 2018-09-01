import * as React from 'react';
import { withRouter } from 'react-router-dom';

import IReaderImageP from './IReaderImageP';
import ReadImage from '../../image';

class ReaderImage extends React.Component<IReaderImageP,{}> {

    public state = {
        isWeb: false, 
        isLoaded: false
    }

    public componentDidMount() {
        this.initImage(this.props.src);
    }

    public componentWillReceiveProps(nextProps: IReaderImageP) {
        if (nextProps.location.pathname != this.props.location.pathname) {
            this.setState({
                isWeb: false,
                isLoaded: false
            });
            this.initImage(nextProps.src);
        }
    }
    public render() {
        const { isVertical } = this.props;
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

    private handleImageLoad = (event: any):any => {
        const image: HTMLImageElement = event.target;
        const imageRatio = image.naturalHeight / image.naturalWidth;
        this.setState({
            isWeb: imageRatio > 3,
            isLoaded: true
        })
    }

    private initImage(src: string) {
        const image = new Image();
        image.onload = this.handleImageLoad;
        image.src = src;
    }

    private onLoadCloneImage(e: any) {
        this.handleImageLoad
    }
}

export default withRouter(ReaderImage);