import { Component, OnInit, ChangeDetectorRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent implements OnInit {

  gotData = false;
  videoId;
  private safeUrl;
  private subscribeToRoute;

  constructor(private activatedRoute: ActivatedRoute, private domSanitizer: DomSanitizer) {
    }

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.subscribeToRoute = this.activatedRoute.params.subscribe(params => {
      this.videoId = params['videoId'];
      this.loadVideo();
    })
  }

  loadVideo() {
    this.makeSafeUrl();
    this.gotData = true;
  }

  makeSafeUrl() {
    const videoUrl = 'https://www.youtube.com/embed/' + this.videoId + '?rel=0';
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

}
