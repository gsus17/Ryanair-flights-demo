import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) {
    console.log(`${SearchComponent.name}::ctor`);

  }

  ngOnInit() {
  }

  /**
   * Redirect to result view.
   * @memberof SearchComponent
   */
  public redirect() {
    console.log(`${SearchComponent.name}::redirect`);

    this.router.navigate([`results`], {
      queryParams: {
        iataTo: 'STN',
        iataFrom: 'DUB',
        dateFrom: '2018-12-02',
        dateTo: '2018-12-19',
        child: 0,
        passengers: 2
      }
    });
  }

}
