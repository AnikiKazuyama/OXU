// import RequestMaker from '../requestMaker';
import { profile, achivments, bookmarks } from './testData';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class ProfileRequests {
  static async getFakeProfile() {
    await sleep(1232);
    return new Promise(resolve => resolve(profile));
  }

  static async getFakeBookmarks() {
    await sleep(123);
    return new Promise(resolve => resolve(bookmarks));
  }

  static async getFakeAchivments() {
    await sleep(321);
    return new Promise(resolve => resolve(achivments));
  }
}

export default ProfileRequests;
