import * as React from 'react';

import Reader from '../../components/reader';
import IReaderContainerP from './IReactContainerP';
import IReaderContainerS from './IReactContainerS';

import RestService from '../../utils/restServive';

import { withRouter } from 'react-router-dom';

import './style/index.scss';

class ReaderContainer extends React.Component<IReaderContainerP, IReaderContainerS> {

    private component: React.RefObject<HTMLDivElement> = React.createRef();

    public state = {
        isVertical: false,
        isLoaded: false,
        chapter: {
            title: '',
            volume: 0,
            number: 0,
            entry: ['']
        }
    };

    public componentDidMount() {
        this.loadChapter();
        this.initEvents();
    }

    public componentWillUnmount() {
       this.removeEvents();
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
        if (this.state.isLoaded)
            return(
                <Reader title = { this.state.chapter.title }
                        volume = {  this.state.chapter.volume } 
                        number = {  this.state.chapter.number } 
                        src = { this.state.chapter.entry[page - 1] } 
                        pageCount = { this.state.chapter.entry.length } 
                        onImageClick = { this.handleImageClick }
                        prevPage = { this.prevPage(page) }
                        nextPage = { this.nextPage(page, this.state.chapter.entry.length) }
                        isVertical = { this.state.isVertical }
                />
            );
        else return ( <div>ГРУЗИМСЯ</div> );
    }

    private onWheel = (e: WheelEvent) => {
        this.component.current.scrollBy({
            top: -e.wheelDelta
        });
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
        const { match: { params : { page } }, history } = this.props;
        const pageCount = this.state.chapter.entry.length;

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

    private initEvents() {
        document.addEventListener('keydown', this.handleArrowPress);
        document.addEventListener('wheel', this.onWheel);
    }

    private removeEvents() {
        document.removeEventListener('keydown', this.handleArrowPress);
        document.removeEventListener('wheel', this.onWheel);
    }

    private async loadChapter() {
        const { match: { params : { mangaName, number } } } = this.props;
        const result = await RestService.getChapter(mangaName, number);
        this.setState({
            chapter: {
                ...result
            },
            isLoaded: true
        });
    }

}

export default withRouter(ReaderContainer);