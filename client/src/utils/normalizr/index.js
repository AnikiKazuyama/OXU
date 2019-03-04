import { normalize } from 'normalizr';
import { manga } from './schemas';

class Normalizr {
  static normalizeManga(rawManga) {
    return normalize(rawManga, manga);
  }
}

export default Normalizr;
