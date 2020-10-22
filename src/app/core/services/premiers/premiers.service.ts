import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.constants';
import { CreatedForecastReponse, ParamaterAddedToPremiereResponse } from '@interfaces/forecast';
import { ForecastUpdatedResponse } from '@interfaces/forecast';
import { PremiereSelected } from '@interfaces/response';
import { ScoredLabelGeneratedByAzureServer, SecoreLabedGeneratedItem } from '@interfaces/azure';
import { GetPremieresForecastResponse } from '@interfaces/premiersForecast';
import { PremiersResponse } from '@interfaces/premiers';

@Injectable({
  providedIn: 'root'
})
export class PremiersService implements OnInit {
  url: string;
  urlPostCreateForecast: string;
  urlGetForecastPremiere: string;
  urlPostPremiereParameterized: string;
  urlPostGenerateForecast: string;
  urlPostUpdateForecastAfterAzure: string;
  httpOptions = {};
  constructor(
    private http: HttpClient
  ) {
    this.url = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_PREMIERS;
    this.urlPostCreateForecast = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.POST_FORECAST_PREMIERE;
    this.urlGetForecastPremiere = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.GET_FORECAST_PREMIERS;
    this.urlPostPremiereParameterized = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.POST_PREMIERE_PARAMETERIZED;
    this.urlPostGenerateForecast = APP_CONSTANTS.API.AZURE + APP_CONSTANTS.API.AZURE_POST_GENERATE_FORECAST;
    this.urlPostUpdateForecastAfterAzure = APP_CONSTANTS.API.BASE + APP_CONSTANTS.API.AZURE_POST_UPDATE_FORECAST_AFTER_AZURE;
    this.httpOptions = {
      headers: new HttpHeaders(APP_CONSTANTS.HTTP_HEADERS)
    };
  }

  ngOnInit() {
  }

  /**
   * Get premiers
   */
  getPremiers(idWeek: number): Observable<PremiersResponse> {
    return this.http.get<PremiersResponse>(this.url.replace('{week}', String(idWeek)));
  }

  /**
   * Create the forecast with each premiere selected
   */
  postCreateForecast(premieresSelected: PremiereSelected[]): Observable<CreatedForecastReponse> {
    return this.http.post<CreatedForecastReponse>(this.urlPostCreateForecast, { peliculas_seleccionadas: premieresSelected });
  }

  /**
   * get premiere forecast
   */
  getForecastPremiers(cityId: number, week: number): Observable<GetPremieresForecastResponse> {
    return this.http.get<GetPremieresForecastResponse>(
      this.urlGetForecastPremiere
        .replace('{cityId}', String(cityId))
        .replace('{week}', String(week)),
      this.httpOptions);
  }

  /**
   * post premiere parameterized
   */
  postPremiereParameterized(data: {}, week: number, movieId: number): Observable<ParamaterAddedToPremiereResponse> {
    return this.http.post<ParamaterAddedToPremiereResponse>(
      this.urlPostPremiereParameterized
        .replace('{week}', String(week))
        .replace('{movieId}', String(movieId)),
      data);
  }

  /**
   * post generate forecast
   */
  postGenerateScoreLabelFromAzure(data: {}): Observable<ScoredLabelGeneratedByAzureServer> {
    return this.http.post<ScoredLabelGeneratedByAzureServer>(this.urlPostGenerateForecast, data, this.httpOptions);
  }

  /**
   * Update forecaste after azure response
   */
  updateForecastAfterAzureResponse(dataToUpdate: SecoreLabedGeneratedItem[], idForecast: string): Observable<ForecastUpdatedResponse> {
    const url = this.urlPostUpdateForecastAfterAzure.replace('{cod_forecast}', String(idForecast));
    return this.http.post<ForecastUpdatedResponse>(url, {data: dataToUpdate}, this.httpOptions);
  }
}
