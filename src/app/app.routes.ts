import { Routes } from '@angular/router';
import { SearchComponent } from './search';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: '**', component: SearchComponent },
];
