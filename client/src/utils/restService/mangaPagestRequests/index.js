import RequestMaker from '../requestMaker';

class MangaPagestRequests {
  static async getChapter(mangaName, chapter) {
    const url = `get-manga/${mangaName}/${chapter}`;
    return RequestMaker.makeRequest('GET', url);
  }
}

export default MangaPagestRequests;
