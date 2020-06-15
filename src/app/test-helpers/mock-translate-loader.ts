import { TranslateLoader } from '@ngx-translate/core';
import { of, Observable } from 'rxjs';


export class MockTranslateLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
      return of({});
    }
}
