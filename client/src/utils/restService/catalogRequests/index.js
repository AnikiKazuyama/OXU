// import RequestMaker from '../requestMaker';
import CatalogDeliver from './testData'; 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class CatalogRequests {
  static async getFakeCatalog(page) {
    await sleep(132);
    return CatalogDeliver.getCatalog(page);
  }
}

export default CatalogRequests;
