import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'app/search.service';
import { NavBarComponent } from 'app/nav-bar/nav-bar.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {

  query;
  private subscribeToRoute;
  videoList;
  gotData = false;

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService,
    private changeDetector: ChangeDetectorRef, private router: Router, private zone: NgZone) {
  }

  ngOnInit() {
    this.subscribeToRoute = this.activatedRoute.params.subscribe(params => {
      this.query = params['query'];
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

  goToVideo(videoId) {
    this.zone.run(() => this.router.navigate(['/video', videoId]))
  }

}
