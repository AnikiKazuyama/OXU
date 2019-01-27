// import RequestMaker from '../requestMaker';
import { profile, achivments, bookmarks } from './testData';
import { catalogData } from '../catalogRequests/testData';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class ProfileRequests {
  static async getFakeProfile() {
    await sleep(132);
    return new Promise(resolve => resolve(profile));
  }

  static async getFakeBookmarks() {
    await sleep(1232);
    return new Promise(resolve => resolve(bookmarks));
  }

  static async addBookmark(to, id) {
    await sleep(321);
    const catalogManga = catalogData.data;

    const manga = catalogManga.find(item => (
      item.id === id
    ));

    bookmarks[to].items.push(manga);

    return new Promise(resolve => resolve(manga));
  }

  static async getFakeAchivments() {
    await sleep(321);
    return new Promise(resolve => resolve(achivments));
  }
}

export default ProfileRequests;
