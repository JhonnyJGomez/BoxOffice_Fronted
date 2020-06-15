import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CitiesService implements OnInit {
  url: string;
  httpOptions = {};
  constructor(
    private http: HttpClient
  ) {
    this.url = APP_CONSTANTS.API.GET_CITIES;
    this.httpOptions = {
      headers: new HttpHeaders(APP_CONSTANTS.HTTP_HEADERS)
    };
  }

  ngOnInit() {
  }

  /**
   * Get cities
   *
   */
  getCities(): Observable<{}> {
    return this.http.get(this.url, this.httpOptions);
  }
}
