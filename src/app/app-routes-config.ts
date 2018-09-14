import { Routes } from '../../node_modules/@angular/router';

export const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: 'app/flights/search/search.module#SearchModule'
    },
    {
        path: 'results',
        loadChildren: 'app/flights/results/results.module#ResultsModule'
    },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
