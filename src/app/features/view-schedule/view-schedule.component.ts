import { CinemaDay, ProgramGroupByDays, Screens, Time } from './../../core/interfaces/program';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chain } from 'lodash';

import { MockData } from '@app/test-helpers/mock-data';
import { ProgramData } from '@interfaces/program';
import { Schedule } from '@interfaces/program';
import { ScheduleService } from '@services/schedule/schedule.service';


@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.scss']
})
export class ViewScheduleComponent implements OnInit {
  forecast: number;
  schedule: Schedule = {};
  movies = [];
  programData: ProgramData;
  programGroupedByDays: ProgramGroupByDays[];
  screens: Screens[];
  times: Time[];
  days: CinemaDay[];

  constructor(
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private mockData: MockData,
  ) { }

  ngOnInit() {
    this.days = this.mockData.getSchedule().days;
    this.screens = this.mockData.getSchedule().screens;
    this.times = this.mockData.getSchedule().times;

    this.route.params.subscribe(params => {
      this.forecast = params.forecast;
      this.getSchedule();
    });
  }

  /**
   * Get schedule
   */
  getSchedule(): void {
    this.scheduleService.getSchedule(this.forecast).subscribe(response => {
      this.programData = response;
      this.schedule.id_forecast = `${this.forecast}`;
      this.schedule.id_semana = '49';
      this.schedule.id_cine = '1';
      this.schedule.nom_cine = 'Jockey Plaza';
      this.schedule.screens = this.screens;
      this.schedule.times = this.times;


      this.programGroupedByDays = chain(this.programData.status)
        .groupBy('id_dia')
        .map((value, key) => ({
          id_day: key,
          name_day: this.days[Number(key) - 1].day,
          data: value,
          movies: [],
          moviesParsedToRender: []
        }))
        .value();

      this.programGroupedByDays.forEach(day => {
        day.movies = chain(day.data)
          .groupBy('titulo')
          .map((value, key) => ({
            title: key,
            id_movie: value[0].id,
            genre: value[0].nom_genero,
            cens: value[0].nom_rating,
            shows: value,
            data: []
          }))
          .value();
        delete day.data;
      });

      this.schedule.days = this.programGroupedByDays;

      this.schedule.days.forEach((day, index: number) => {
        day.movies.forEach(movie => {
          movie.shows.forEach(show => {
            const screenId = Number(show.nom_sala.split(' ')[0]) - 1;
            const timeId = (show.id_tiempo - 1);

            if (!day.moviesParsedToRender[screenId]) {
              day.moviesParsedToRender[screenId] = new Array(this.schedule.screens.length);
            }

            day.moviesParsedToRender[screenId][timeId] = { ...show };
          });
        });
      });
    });
  }
}
