import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CookieService } from 'ngx-cookie-service';
import { PremiersService } from './premiers.service';

describe('GenerateService', () => {
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CookieService],
    });

    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    const service: PremiersService = TestBed.get(PremiersService);
    expect(service).toBeTruthy();
  });
});
