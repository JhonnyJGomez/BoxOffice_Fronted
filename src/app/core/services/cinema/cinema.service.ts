import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';
import { CinemaResponse } from '@interfaces/cinema';

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
  getCinemas(city: number): Observable<CinemaResponse> {
    return this.http.get<CinemaResponse>(this.url.replace('{cityId}', String(city)));
  }
}
