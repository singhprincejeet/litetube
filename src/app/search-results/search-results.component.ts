import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  gotData = false;

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService,
    private changeDetector: ChangeDetectorRef) {

  ngOnInit() {
    this.subscribeToRoute = this.activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this.searchInput = this.query;
      this.makeQuery();
    })
  }

  makeQuery() {
    const response = this.searchService.search(this.query, (res, error) => {
      if (error) {
        console.log(error);
      }else {
        this.videoList = res.items;
        this.gotData = true;
        this.changeDetector.detectChanges();
      }
    });
  }

}
