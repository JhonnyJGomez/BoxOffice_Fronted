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
    }, error => {});
  }
}
