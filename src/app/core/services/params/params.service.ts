import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';
import { ParamsProgramResponse } from '@interfaces/paramsPrograms';
import { ParamsResponse } from '@interfaces/params';

@Injectable({
  providedIn: 'root'
})
export class ParamsService implements OnInit {
  url: string;
  urlParamsProgram: string;
  httpOptions = {};
  constructor(
    private http: HttpClient
  ) {
    this.url = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_PARAMS;
    this.urlParamsProgram = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_PARAMS_PROGRAM;
  }

  ngOnInit() {
  }

  /**
   * Get params
   */
  getParams(): Observable<ParamsResponse> {
    return this.http.get<ParamsResponse>(this.url);
  }

  /**
   * Get params
   *
   */
  getParamsPrograms(): Observable<ParamsProgramResponse> {
    return this.http.get<ParamsProgramResponse>(this.urlParamsProgram);
  }
}
