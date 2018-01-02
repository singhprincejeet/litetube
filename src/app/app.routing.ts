import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

const AppRouter: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
]

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(AppRouter);