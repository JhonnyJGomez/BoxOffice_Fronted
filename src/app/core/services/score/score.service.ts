import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ScoreService implements OnInit {
  generateURL: string;
  httpOptions = {};
  data = {
    Inputs: {
      input1:
        [
          {
            Rank: '1',
            Title: 'Maleficent: Mistress Of Evil',
            Rating: 'A',
            Dist: 'DISNEY',
            Genre: 'Adventure',
            ReleaseDate: '10/17/2019'
          }
        ]
    },
    GlobalParameters: {}
  };
  constructor(
    private http: HttpClient
  ) {
    this.generateURL = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_FORECAST_V2;
  }

  ngOnInit() {
  }

  /**
   * Get the score
   *
   */
  getScore(codeForecast: number): Observable<{}> {
    return this.http.get(this.generateURL.replace('{codeForecast}', String(codeForecast)));
  }
}
