// import RequestMaker from '../requestMaker';
import CatalogDeliver from './testData'; 
import AsyncUtil from '../asyncUtils';

class CatalogRequests {
  static async getFakeCatalog(page) {
    await AsyncUtil.sleep(132);
    return CatalogDeliver.getCatalog(page);
  }
}

export default CatalogRequests;
