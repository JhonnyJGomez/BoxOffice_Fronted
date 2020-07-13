import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';
import { ParamProgramToSave, SaveForecastData } from '@interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements OnInit {
  urlSaveParams: string;
  urlGenerateSchedule: string;
  urlGetSchedule: string;
  httpOptions = {};
  constructor(
    private http: HttpClient
  ) {
    this.urlSaveParams = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.POST_SAVE_PARAM_PROGRAM;
    this.urlGenerateSchedule = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GENERATE_SCHEDULE;
    this.urlGetSchedule = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GENERATE_SCHEDULE;
  }

  ngOnInit() {
  }

  /**
   * Save params program
   */
  saveParamsProgram(data: ParamProgramToSave): Observable<{}> {
    return this.http.post(this.urlSaveParams, data);
  }

  /**
   * Generate schedule
   */
  generateSchedule(saveForecastData: SaveForecastData): Observable<{}> {
    return this.http.post(this.urlGenerateSchedule, saveForecastData);
  }

  /**
   * Get schedule
   */
  getSchedule(forecast: number): Observable<{}> {
    return this.http.get(this.urlGetSchedule.replace('{forecast}', String(forecast)));
  }
}
