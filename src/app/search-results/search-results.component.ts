import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SearchService } from 'app/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  query;
  searchInput;
  private subscribeToRoute;
  videoList;
  gotData;

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService,
    private router: Router) {
  }

  ngOnInit() {
    this.subscribeToRoute = this.activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this.searchInput = this.query;

      const response = this.searchService.search(this.query);

      response.then((res) => {
        this.videoList = res['items'];
        this.gotData = true;
      }).catch((err) => {
        console.log(err)
      })
    })
  }

  search() {
    this.router.navigate(['/results', this.searchInput])
  }

}
