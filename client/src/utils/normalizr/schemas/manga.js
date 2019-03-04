import { schema } from 'normalizr';

const author = new schema.Entity('author');
const genre = new schema.Entity('genres');
const magazine = new schema.Entity('magazine');
const manga = new schema.Entity('manga', {
  author,
  genres: [genre],
  magazine
});

export default manga;
