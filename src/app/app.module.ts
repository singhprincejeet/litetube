import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from 'app/app.routing';
import { MaterialModule } from 'app/app.material';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from 'app/search.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    MaterialModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
