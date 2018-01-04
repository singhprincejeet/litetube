import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() searchInput: string;
  @Input() videoId: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/results', this.searchInput])
  }

  goToYoutube() {
    if (this.searchInput) {
      window.location.href = 'https://www.youtube.com/results?search_query=' + this.searchInput;
    } else if (this.videoId) {
      window.location.href = 'https://www.youtube.com/watch?v=' + this.videoId;
    }
  }

}
