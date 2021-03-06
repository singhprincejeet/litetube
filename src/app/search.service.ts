import { Injectable } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';

import auth from 'app/auth';

@Injectable()
export class SearchService {

  constructor(private gapiService: GoogleApiService) {
   }

  private removeEmptyParams(params) {
    for (const p in params) {
      if (!params[p] || params[p] == 'undefined') {
        delete params[p];
      }
    }
    return params;
  }

  buildParams(query) {
    const params = {
      'maxResults': '25',
      'part': 'snippet',
      'q': query,
      'type': ''
    };

    this.removeEmptyParams(params)

    return params;
  }

  gapiInit(gapi) {
    gapi.client.init({
      'apiKey': auth.client_id,
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    })
  }

  search(query, callback) {

    const params = this.buildParams(query)

    this.gapiService.onLoad().subscribe(() => {

      this.gapiInit(gapi)

      let result;
      let error;

      gapi.client.request({
        method: 'GET',
        params: params,
        path: '/youtube/v3/search'
      })
      .then((response) => {
        result = response.result;
      }, function(reason) {
        error = reason.result.error.message;
      }).then(() => {
        callback(result, error)
      })
    })

  }
}
