import { Injectable } from '@angular/core';

import auth from 'app/auth';

@Injectable()
export class SearchService {

  constructor() { }

  removeEmptyParams(params) {
    for (const p in params) {
      if (!params[p] || params[p] == 'undefined') {
        delete params[p];
      }
    }
    return params;
  }

  search(searchInput) {
    let params = {
      'maxResults': '25',
      'part': 'snippet',
      'q': searchInput,
      'type': ''
    };

    this.removeEmptyParams(params)

    let result;
    let error;

    return gapi.client.init({
      'apiKey': auth.client_id,
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    })
    .then(() => {
      return gapi.client.request({
        method: 'GET',
        params: params,
        path: '/youtube/v3/search'
      })
    })
    .then((response) => {
      result = response.result
    }, function(reason) {
      error = reason.result.error.message;
    })
    .then(() => {
      return {'result': result, 'error': error};
    })
  }
}
