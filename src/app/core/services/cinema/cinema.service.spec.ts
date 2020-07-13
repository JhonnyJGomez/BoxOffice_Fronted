import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CookieService } from 'ngx-cookie-service';
import { CinemaService } from './cinema.service';

describe('CinemaService', () => {
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CookieService],
    });

    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    const service: CinemaService = TestBed.get(CinemaService);
    expect(service).toBeTruthy();
  });
});
