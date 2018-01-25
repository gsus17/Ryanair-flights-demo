import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { SearchComponent } from './search/search.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
