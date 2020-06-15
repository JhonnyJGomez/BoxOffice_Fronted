import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CookieServiceMock } from '@app/test-helpers/mock-services/cookie-service.mock';
import { MainComponent } from './main.component';
import { MockTranslateLoader } from '@app/test-helpers/mock-translate-loader';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: MockTranslateLoader
          }
        })
      ],
      providers: [
        { provide: Router, useValue: mockRouter},
        { provide: CookieService, useClass: CookieServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
