import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CookieService } from 'ngx-cookie-service';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CookieService],
    });

    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    const service: CitiesService = TestBed.get(CitiesService);
    expect(service).toBeTruthy();
  });
});
