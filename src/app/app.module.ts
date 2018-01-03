import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from 'app/app.routing';
import { MaterialModule } from 'app/app.material';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from 'app/search.service';
import auth from 'app/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    MaterialModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: auth
    })
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
