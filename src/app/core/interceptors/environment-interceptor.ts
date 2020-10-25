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

            if (req.url.match('generar_programacion')) {
                mockResponse.body = this.mockData.getProgramData();
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
