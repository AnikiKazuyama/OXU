import axios from 'axios';
import qs from 'qs';

class RestService {
  static makeRequest(method, url, data) {
    const postOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data),
      url: `${'http://localhost:3000'}/${url}`,
      withCredentials: true
    };

    switch (method) {
      case ('GET'):
        return axios.get(`${'http://localhost:3000'}/${url}`, { withCredentials: true })
          .then(response => (response.data))
          .catch((error) => {
            throw (error);
          });

      case ('POST'):
        return axios(postOptions)
          .then(response => (response.data))
          .catch((error) => {
            throw (error);
          });

      default: break;
    }
    return null;
  }

  static async getChapter(mangaName, chapter) {
    const url = `get-manga/${mangaName}/${chapter}`;
    return this.makeRequest('GET', url);
  }
}

export default RestService;
