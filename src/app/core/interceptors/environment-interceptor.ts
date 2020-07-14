import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { MockData } from '@app/test-helpers/mock-data';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class EnvironmentInterceptor implements HttpInterceptor {
    env: string;

    constructor(
        private cookieService: CookieService,
        private mockData: MockData
    ) {
        this.env = this.cookieService.get('env');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.env === 'dev') {
            const mockResponse: any = {};

            if (req.url.match('swagger')) {
                mockResponse.body = this.mockData.getScore();
            } else if (req.url.match('semanas?fecha_inicial')) {
                mockResponse.body = this.mockData.getWeek();
            } else if (req.url.match('peliculas_semanas')) {
                mockResponse.body = this.mockData.getPremiers();
            } else if (req.url.match('ciudades')) {
                mockResponse.body = this.mockData.getCities();
            } else if (req.url.match('peliculas_forecast?create')) {
                mockResponse.body = this.mockData.postPremiereForecast();
            } else if (req.url.match('peliculas_forecast?num_semana')) {
                mockResponse.body = this.mockData.getPremiereForecast();
            } else if (req.url.match('parametros')) {
                mockResponse.body = this.mockData.getParams();
            } else if (req.url.match('peliculas_parametrizar/num_semana')) {
                mockResponse.body = this.mockData.postPremiereParameterized();
            } else if (req.url.match('forecast/generate_forecast')) {
                mockResponse.body = this.mockData.postGenerateForecast();
            } else if (req.url.match('generar_programacion')) {
                mockResponse.body = this.mockData.getSchedule();
            }

            if (mockResponse.body) {
                return of(new HttpResponse({status: 200, body: mockResponse.body})).pipe(
                    delay(200)
                );
            }

            return next.handle(req);
        }

        return next.handle(req);
    }
}
