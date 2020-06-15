import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ScoreService } from './score.service';
import { CookieService } from 'ngx-cookie-service';

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
    const service: ScoreService = TestBed.get(ScoreService);
    expect(service).toBeTruthy();
  });
});
