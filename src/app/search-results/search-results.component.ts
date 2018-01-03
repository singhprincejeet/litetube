import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SearchService } from 'app/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  query;
  private subscribeToRoute;
  videoList;
  gotData;

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) {
  }

  ngOnInit() {
    this.subscribeToRoute = this.activatedRoute.params.subscribe(params => {
      this.query = params['query'];

      const response = this.searchService.search(this.query);

      response.then((res) => {
        this.videoList = res['items'];
        this.gotData = true;
      }).catch((err) => {
        console.log(err)
      })
    })
  }

}
