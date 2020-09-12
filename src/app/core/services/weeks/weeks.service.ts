import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WeeksService implements OnInit {
  url: string;
  httpOptions = {};
  constructor(
    private http: HttpClient
  ) {
    this.url = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_WEEKS;
  }

  ngOnInit() {
  }

  /**
   * Get week
   *
   */
  getWeeks(date: string): Observable<{}> {
    console.log(this.url);
    return this.http.get('/api/semanas?fecha_inicial="' + date + '"');
    // he tenido que enviarlo asi directo porque me jala el error de CORS, como si no tomara el proxy.conf.js   
    //return this.http.get(this.url.replace('{date}', date));
  }
}
