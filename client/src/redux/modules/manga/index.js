import { createSelector } from 'reselect';
import { handleAction } from 'redux-actions';

import withLoadable from '../../HOR/withLoadable';
import generateLoadableActions from '../../helpers/factories/loadableFactory';

const moduleName = 'manga';
const loadable = generateLoadableActions(moduleName);

export const types = {
  ...loadable.types
};

export const actions = {
  ...loadable.actions
};

const initialState = { 
  entities: {},
  result: null
};

function handleLoadSuccess(state, { payload }) {
  return ({
    ...state,
    ...payload.data
  });
}

const mangaReducer = handleAction(
  actions.loadSuccess,
  handleLoadSuccess,
  initialState
);

const getResult = state => state.manga.data.result;
const getManga = state => state.manga.data.entities.manga;
const getAuthor = state => state.manga.data.entities.author;
const getGenres = state => state.manga.data.entities.genres;
const getMagazine = state => state.manga.data.entities.magazine;

export const getMangaResult = createSelector(
  getResult,
  getManga,
  getAuthor,
  getGenres,
  getMagazine,
  (result, manga, author, genres, magazine) => {
    if (!result || result.length === 0) return null;
    const actualManga = manga[result];
    const authorId = actualManga.author;
    const genresIds = actualManga.genres;
    const magazineId = actualManga.magazine;

    return ({
      ...actualManga,
      author: author[authorId],
      genres: genresIds.map(id => genres[id]),
      magazine: magazine[magazineId]
    });
  }
);

export default withLoadable({
  ...loadable.actions
})(mangaReducer);
