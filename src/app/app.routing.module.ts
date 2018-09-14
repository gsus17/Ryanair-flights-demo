import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
