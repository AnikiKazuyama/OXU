import React, { Component } from 'react';
import { connect } from 'react-redux';

import Manga from '../view/Manga';

import { 
  getMangaResult,
  actions as mangaActions
} from '../../../redux/modules/manga';

function mapStateToProps(state) {
  return ({
    manga: getMangaResult(state)
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    loadManga: id => dispatch(mangaActions.load({ id }))
  });
}

@connect(mapStateToProps, mapDispatchToProps)
class MangaContainer extends Component {
  componentDidMount() {
    const { loadManga, match } = this.props;
    const { id } = match.params;

    loadManga(id);
  }

  render() {
    const { manga } = this.props;
    if (manga) {
      return (
        <Manga heroUrl={manga.heroUrl} manga={manga} />
      );
    }

    return null;
  }
}

export default MangaContainer;
