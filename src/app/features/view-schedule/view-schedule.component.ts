import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Schedule } from '@interfaces/response';
import { ScheduleService } from '@services/schedule/schedule.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.scss']
})
export class ViewScheduleComponent implements OnInit {
  forecast: number;
  schedule: Schedule;
  movies = [];

  constructor(
    private scheduleService: ScheduleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.forecast = params.forecast;
      this.getSchedule();
    });
  }

  /**
   * Get schedule
   */
  getSchedule(): void {
    this.scheduleService.getSchedule(this.forecast).subscribe((response: Schedule) => {
      this.schedule = response;
      this.schedule.movies.forEach((movie, index: number) => {
        movie.shows.forEach(show => {
          const movieToAdd = {
            ...movie,
            start: show.start,
            final: show.final
          };

          !this.movies[show.screen] ?
            this.movies[show.screen] = new Array(this.schedule.screens.length) :
            this.movies[show.screen][show.time] = movieToAdd;
        });
      });
    }, error => {});
  }
}
