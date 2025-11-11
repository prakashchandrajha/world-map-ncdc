import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

export class CustomTranslateLoader implements TranslateLoader {
  private apiKey = 'AIzaSyC-U0ZsN3yMFgXUqrEu72N_3iAQZO2IkyU'; // THIS IS NOT SECURE
  private baseUrl = 'https://translation.googleapis.com/language/translate/v2';

  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    if (lang === 'en') {
      return this.http.get('/assets/i18n/en.json');
    }

    return this.http.get('/assets/i18n/en.json').pipe(
      switchMap((source: any) => {
        const flatJson = this.flattenObject(source);
        const keys = Object.keys(flatJson);
        const values = Object.values(flatJson);

        return this.http.post(`${this.baseUrl}?key=${this.apiKey}`, { q: values, target: lang }).pipe(
          map((response: any) => {
            const translations = response.data.translations;
            const translatedObject = {};
            keys.forEach((key, index) => {
              this.setObjectProperty(translatedObject, key, translations[index].translatedText);
            });
            return translatedObject;
          }),
          catchError((error) => {
            console.error('Error loading translations, falling back to English', error);
            return of(source);
          })
        );
      })
    );
  }

  private flattenObject(obj: any, parentKey = '', result: { [key: string]: string } = {}) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          this.flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }

  private setObjectProperty(obj: any, path: string, value: any) {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]] = current[keys[i]] || {};
    }
    current[keys[keys.length - 1]] = value;
  }
}
