// import RequestMaker from '../requestMaker';
import fakeManga from './testData';

class MangaRequests {
  static async getFakeManga(id) {
    return fakeManga[id];
  }
}

export default MangaRequests;
