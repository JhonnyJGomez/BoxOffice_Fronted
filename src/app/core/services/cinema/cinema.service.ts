import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CinemaService implements OnInit {
  url: string;
  httpOptions = {};
  constructor(
    private http: HttpClient
  ) {
    this.url = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_CINEMAS;
  }

  ngOnInit() {
  }

  /**
   * Get Cinemas
   */
  getCinemas(city: number): Observable<{}> {
    return this.http.get('api/cines?cod_ciudad={cityId}'.replace('{cityId}', String(city)));
    /* return this.http.get(this.url.replace('{cityId}', String(city))); */
  }
}
