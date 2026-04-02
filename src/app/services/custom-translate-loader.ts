import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

export class CustomTranslateLoader implements TranslateLoader {

  private apiKey = 'AIzaSyAHGM8vXKWHNDzIZramCtpeopYL3M28pOM'; // replace later
  private baseUrl = 'https://translation.googleapis.com/language/translate/v2';
  private cacheVersion = 'v1'; // change if en.json changes

  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {

    // ✅ English → no API call
    if (lang === 'en') {
      return this.http.get('/assets/i18n/en.json');
    }

    // ✅ CACHE CHECK
    const cacheKey = `translation_${lang}_${this.cacheVersion}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      console.log(`✅ Loaded ${lang} from cache`);
      return of(JSON.parse(cached));
    }

    // ✅ API CALL
    return this.http.get('/assets/i18n/en.json').pipe(
      switchMap(async (source: any) => {
        try {
          const flatJson = this.flattenObject(source);
          const keys = Object.keys(flatJson);
          const values = Object.values(flatJson);

          const translatedObject: any = {};
          
          // Translate all values by joining with a special delimiter
          const delimiter = ' \n\n ';
          const combinedText = values.join(delimiter);
          
          const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(combinedText)}`);
          const data = await response.json();
          
          let translatedCombined = '';
          if (data && data[0]) {
            translatedCombined = data[0].map((item: any) => item[0]).join('');
          }
          
          const translatedValues = translatedCombined.split(delimiter.trim());
          
          keys.forEach((key, index) => {
            this.setObjectProperty(
              translatedObject,
              key,
              translatedValues[index] ? translatedValues[index].trim() : values[index]
            );
          });

          localStorage.setItem(cacheKey, JSON.stringify(translatedObject));
          console.log(`💾 Saved ${lang} to cache`);

          return translatedObject;
        } catch (error) {
          console.error('❌ Translation failed, fallback to English', error);
          return source;
        }
      })
    );
  }

  private flattenObject(obj: any, parentKey = '', result: { [key: string]: string } = {}) {
    for (const key in obj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
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