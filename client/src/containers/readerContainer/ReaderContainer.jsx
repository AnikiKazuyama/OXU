import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Reader from '../../components/reader';

import RestService from '../../utils/restServive';

import './style/index.scss';

class ReaderContainer extends Component {
  static defaultProps = {
    history: null,
    match: {
      params: {
        page: 0
      }
    }
  }

  static propTypes = {
    history: PropTypes.objectOf,
    match: {
      params: {
        page: PropTypes.number
      }
    }
  }

  constructor() {
    super();

    this.component = React.createRef();

    this.state = {
      isLoaded: false,
      chapter: {
        title: '',
        volume: 0,
        number: 0,
        entry: ['']
      }
    };
  }

  componentDidMount() {
    this.loadChapter();
    this.initEvents();
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  onWheel = (e) => {
    this.component.current.scrollBy({
      top: -e.wheelDelta
    });
  }

  handleImageClick = (page, pageCount) => {
    const { history } = this.props;

    history.push(`${this.nextPage(page, pageCount)}`);
  }

  handleArrowPress = (e) => {
    const { match: { params: { page } }, history } = this.props;
    const pageCount = this.state.chapter.entry.length;

    switch (e.keyCode) {
      case 37:
        history.push(`${this.prevPage(page)}`);
        break;
      case 39:
        history.push(`${this.nextPage(page, pageCount)}`);
        break;
      default: break;
    }
  }

  nextPage(page, pageCount) {
    return +page + 1 > pageCount ? pageCount : +page + 1;
  }

  prevPage(page) {
    return page - 1 < 1 ? 1 : page - 1;
  }

  initEvents() {
    document.addEventListener('keydown', this.handleArrowPress);
    document.addEventListener('wheel', this.onWheel);
  }

  removeEvents() {
    document.removeEventListener('keydown', this.handleArrowPress);
    document.removeEventListener('wheel', this.onWheel);
  }

  async loadChapter() {
    const { match: { params: { mangaName, number } } } = this.props;
    const result = await RestService.getChapter(mangaName, number);
    this.setState({
      chapter: {
        ...result
      },
      isLoaded: true
    });
  }

  render() {
    const { match: { params: { page } } } = this.props;
    if (this.state.isLoaded) {
      return (
        <Reader
          title={this.state.chapter.title}
          volume={this.state.chapter.volume}
          number={this.state.chapter.number}
          src={this.state.chapter.entry[page - 1]}
          pageCount={this.state.chapter.entry.length}
          onImageClick={this.handleImageClick}
          prevPage={this.prevPage(page)}
          nextPage={this.nextPage(page, this.state.chapter.entry.length)}
        />
      );
    }
    return (<div>ГРУЗИМСЯ</div>);
  }
}

export default withRouter(ReaderContainer);
