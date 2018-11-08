import axios from 'axios';
import * as qs from 'qs';

class RestService {
    static makeRequest(method, url, data) {
        switch(method){
           case('GET'):
            return axios.get(`${ 'http://localhost:3000' }/${ url }`, { withCredentials: true })
            .then(function (response) {
                    return response.data;
            })
            .catch(function (error) {
                throw(error);
            });
           case('POST'):
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(data),
                url: `${ 'http://localhost:3000' }/${ url }`,
                withCredentials: true
            };

            return axios(options)
            .then(response => {
                return response.data;
            }).catch(function (error) {
                throw(error);
            });
        }
    }

    static async getChapter(mangaName, chapter) {
    const url = `get-manga/${mangaName}/${chapter}`;
        return await this.makeRequest('GET', url);
    }
}

export default RestService;
