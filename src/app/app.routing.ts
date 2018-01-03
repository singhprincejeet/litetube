import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { SearchResultsComponent } from 'app/search-results/search-results.component';

const AppRouter: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'results/:query', component: SearchResultsComponent}
]

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(AppRouter);
