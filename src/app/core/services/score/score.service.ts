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
    this.generateURL = APP_CONSTANTS.API.GET_DATA;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer qNkxIum11cJiiB6LiYnu+SrIiN3G73ytQl89y4kVsXvR80xGyHW8GtPTVLCgbJXSg6wPas/o7ti/MooXDWNADg=='
      })
    };
  }

  ngOnInit() {
  }

  /**
   * Get the score
   *
   */
  getScore(): Observable<{}> {
    return this.http.post(this.generateURL, this.data, this.httpOptions);
  }
}
