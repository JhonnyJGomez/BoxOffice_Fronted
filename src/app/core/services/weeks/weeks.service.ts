import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';
import { WeeksResponse } from '@interfaces/weeks';

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
  getWeeks(date: string): Observable<WeeksResponse> {
    return this.http.get<WeeksResponse>(this.url.replace('{date}', date));
  }
}
