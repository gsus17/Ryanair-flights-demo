import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(`${FlightListComponent.name}::ctor`);

  }

  ngOnInit() {

  }

}
