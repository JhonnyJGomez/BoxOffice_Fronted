import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';
import { PremiereSelected, GeneratedForecast } from '@interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class PremiersService implements OnInit {
  url: string;
  urlPostAddForecastPremiere: string;
  urlGetForecastPremiere: string;
  urlPostPremiereParameterized: string;
  urlPostGenerateForecast: string;
  httpOptions = {};
  constructor(
    private http: HttpClient
  ) {
    this.url = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_PREMIERS;
    this.urlPostAddForecastPremiere = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.POST_FORECAST_PREMIERE;
    this.urlGetForecastPremiere = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_FORECAST_PREMIERS;
    this.urlPostPremiereParameterized = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.POST_PREMIERE_PARAMETERIZED;
    // TODO: uncomment when the endpoint is working as expected
    // this.urlPostGenerateForecast = APP_CONSTANTS.API.AZURE;
    this.urlPostGenerateForecast = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.POST_GENERATE_FORECAST_V2;
    this.httpOptions = {
      headers: new HttpHeaders(APP_CONSTANTS.HTTP_HEADERS)
    };
  }

  ngOnInit() { 
  }

  /**
   * Get premiers
   */
  getPremiers(idWeek: number): Observable<{}> {
    return this.http.get('/api/peliculas_semanas?id_semana='+ String(idWeek));
    
    //return this.http.get(this.url.replace('{week}', String(week)));
  }

  /**
   * post premiere forecast
   */
  postAddForecastPremier(premiereSelected: PremiereSelected[]): Observable<{}> {
    return this.http.post('/api/peliculas_forecast/create', premiereSelected); 
    //return this.http.post(this.urlPostAddForecastPremiere, premiereSelected);
  }

  /**
   * get premiere forecast
   */
  getForecastPremiers(cityId: number, week: number): Observable<{}> {
    return this.http.get(
      this.urlGetForecastPremiere
        .replace('{cityId}', String(cityId))
        .replace('{week}', String(week)),
      this.httpOptions);
  }

  /**
   * post premiere parameterized
   */
  postPremiereParameterized(data: {}, week: number, movieId: number): Observable<{}> {
    return this.http.post(
      this.urlPostPremiereParameterized
        .replace('{week}', String(week))
        .replace('{movieId}', String(movieId)),
      data);
  }

  /**
   * post generate forecast
   */
  postGenerateForecast(data: {}): Observable<GeneratedForecast> {
    return this.http.post<GeneratedForecast>(this.urlPostGenerateForecast, data, this.httpOptions);
  }
}
