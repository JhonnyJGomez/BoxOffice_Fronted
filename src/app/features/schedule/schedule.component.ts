import { Component, OnInit } from '@angular/core';

import { City, Cinema, Output } from '@interfaces/response';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  date: string;
  week: number;
  citySelected: number;
  cities: City[] = [
    {
      ciudad: 'Lima',
      id: 1
    },
    {
      ciudad: 'Medellin',
      id: 2
    },
    {
      ciudad: 'Bogotá',
      id: 3
    }
  ];
  cinemas: Cinema[] = [
    {
      name: 'Jockey Plaza'
    },
    {
      name: 'Mayorca'
    },
    {
      name: 'Aves maría'
    }
  ];
  dataSource: Output[] = [
    {
      Rank: '1',
      Title: '2',
      Rating: '3',
      Dist: '4',
      Genre: '5',
      ReleaseDate: '6',
      'Scored Labels': '7',
    }
  ];
  displayedColumns: string[] = ['movies', 'prediction', 'participation'];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Load Forecast
   */
  loadData() {
    console.log('enter here');
  }

}
