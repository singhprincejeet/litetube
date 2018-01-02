import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchInput = 'sh';

  constructor() {
  }

  ngOnInit() {
  }

  search() {
  }
}
