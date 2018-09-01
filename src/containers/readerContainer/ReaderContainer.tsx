import * as React from 'react';

import Reader from '../../components/reader';
import manga from './test/index';
import IReaderContainerP from './IReactContainerP';
import IReaderContainerS from './IReactContainerS';

import { withRouter } from 'react-router-dom';

import './style/index.scss';

class ReaderContainer extends React.Component<IReaderContainerP, IReaderContainerS> {

    public state = {
        isVertical: false
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleArrowPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleArrowPress);
    }

    componentWillReceiveProps(nextProps: IReaderContainerP) {
        if (nextProps.location.pathname !== this.props.location.pathname)
            this.setState({
                isVertical: false
            });
    }

    public render() {
        return( this.renderComponent() );
    }

    private renderComponent(): JSX.Element {
        const { match: { params : { page, mangaName, number } } } = this.props;
        return(
            <Reader title = { manga[mangaName].title }
                    volume = {  manga[mangaName].chapters[number].volume } 
                    number = {  number } 
                    src = { manga[mangaName].chapters[number].entry[page - 1] } 
                    pageCount = { manga[mangaName].chapters[number].entry.length } 
                    onImageClick = { this.handleImageClick }
                    prevPage = { this.prevPage(page) }
                    nextPage = { this.nextPage(page, manga[mangaName].chapters[number].entry.length) }
                    isVertical = { this.state.isVertical }
            />
        );
    }

    private handleImageClick = (page:number, pageCount:number) => {
        const { history } = this.props;

        history.push(`${this.nextPage(page, pageCount)}`);
    }

    private nextPage(page: number, pageCount: number): number {
        return +page + 1 > pageCount ? pageCount : +page + 1;
    }

    private prevPage(page: number): number {
        return page - 1 < 1 ? 1 : page - 1;
    }

    private handleArrowPress = (e: KeyboardEvent) => {
        const { match: { params : { page, mangaName, number } }, history } = this.props;
        const pageCount = manga[mangaName].chapters[number].entry.length;

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
            case 37: 
                history.push(`${this.prevPage(page)}`)
                break;
            case 39: 
                history.push(`${this.nextPage(page, pageCount)}`);
                break;
        }
    }
}

export default withRouter(ReaderContainer);