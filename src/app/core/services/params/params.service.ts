import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';

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
  getParams(): Observable<{}> {
    return this.http.get('/api/parametros');

    //return this.http.get(this.url);
  }

  /**
   * Get params
   *
   */
  getParamsPrograms(): Observable<{}> {
    return this.http.get(this.urlParamsProgram);
  }
}
