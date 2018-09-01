import * as React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import ReaderImage from './readerImage';
import IReaderP from './IReaderP'

import StyleUtils from '../../utils/styleUtils';
import { withRouter, Link } from 'react-router-dom';

import './style/index.scss';
import ReaderScroll from './readerScroll';

class Reader extends React.Component<IReaderP,{}> {

    public componentDidMount() {
        StyleUtils.toggleBodyReaderStyle();
    }

    public componentWillUnmount() {
        StyleUtils.toggleBodyReaderStyle();
    }

    public render() {
        const { 
            match: { params : { page } },
            title,
            src, 
            pageCount, 
            nextPage, 
            prevPage
        } = this.props;
        return(
            <div className = 'reader'>
                <Link to = { `${ prevPage }` } className = 'reader__side reader__side--left'>
                    <div className = 'reader__arrow reader__arrow--left'/>
                </Link>
                <div className = 'reader__container'>
                    <ReaderScroll>
                        <ReaderImage  alt = { title } 
                                      src = { src } 
                                      className = 'reader__image'
                                      errorClassName = 'reader__image--error'
                                      onClick = { this.handleImageClick }
                                      isVertical = { this.props.isVertical }
                        /> 
                    </ReaderScroll>
                    <div className = 'reader__pages'>{ `${page}/${pageCount}` }</div>
                </div>

                <Link to = { `${ nextPage }` } className = 'reader__side reader__side--right'>
                    <div className = 'reader__arrow reader__arrow--right'/>
                </Link>
            </div>
        );
    }

    private handleImageClick = (): void => {
        const { 
            match: { params : { page } },
            pageCount, 
            onImageClick
        } = this.props;

        onImageClick(page, pageCount);
    }
}

export default withRouter(Reader);