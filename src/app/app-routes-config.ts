import { Routes } from '../../node_modules/@angular/router';
import { SearchComponent } from './flights/search/search.component';
import { ResultsComponent } from './flights/results/results.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SearchComponent },
    { path: 'results', component: ResultsComponent }
];
