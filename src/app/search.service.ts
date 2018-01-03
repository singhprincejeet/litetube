import { Injectable } from '@angular/core';

import auth from 'app/auth';
import { promise } from 'selenium-webdriver';

declare var gapi;

@Injectable()
export class SearchService {

  constructor() {
   }

  private removeEmptyParams(params) {
    for (const p in params) {
      if (!params[p] || params[p] == 'undefined') {
        delete params[p];
      }
    }
    return params;
  }

  search(query) {

    const v = gapi;

    const params = {
      'maxResults': '25',
      'part': 'snippet',
      'q': query,
      'type': ''
    };

    this.removeEmptyParams(params)

    gapi.client.init({
      'apiKey': auth.client_id,
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    })

    return new Promise((resolve, reject) => {
      gapi.client.request({
        method: 'GET',
        params: params,
        path: '/youtube/v3/search'
      })
      .then((response) => {
        resolve(response.result)
      }, function(reason) {
        reject(reason.result.error.message);
      })
    })

  }
}
