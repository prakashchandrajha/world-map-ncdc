
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslationProvider } from './translation-provider.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonTranslationProvider implements TranslationProvider {
  constructor(private http: HttpClient) {}

  loadTranslations(lang: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const generalTranslations$ = this.http.get(`/assets/i18n/${lang}.json`);
      const aboutTranslations$ = this.http.get(`/assets/i18n/about.${lang}.json`);
      const homeTranslations$ = this.http.get(`/assets/i18n/home.${lang}.json`);

      forkJoin([generalTranslations$, aboutTranslations$, homeTranslations$]).subscribe({
        next: ([generalData, aboutData, homeData]: [any, any, any]) => {
          try {
            const mergedTranslations = { ...generalData, ...aboutData, ...homeData };
            resolve(mergedTranslations);
          } catch (e) {
            console.error('Error merging translation files:', e);
            reject(e);
          }
        },
        error: (err) => {
          console.error(`Error loading translation files for language: ${lang}`, err);
          reject(err);
        }
      });
    });
  }

  translate(key: string, translations: any): string {
    const value = this.getNestedValue(translations, key);
    if (typeof value === 'string') {
      return value;
    }
    return key;
  }

  private getNestedValue(obj: any, path: string): any {
    if (!obj || typeof obj !== 'object') return undefined;
    return path.split('.').reduce((current, key) => {
      if (current && typeof current === 'object') {
        if (key.includes('[') && key.includes(']')) {
          const arrayKey = key.substring(0, key.indexOf('['));
          const index = parseInt(key.substring(key.indexOf('[') + 1, key.indexOf(']')));
          if (current[arrayKey] && Array.isArray(current[arrayKey]) && current[arrayKey][index] !== undefined) {
            return current[arrayKey][index];
          }
        } else if (key in current) {
          return current[key];
        }
      }
      return undefined;
    }, obj);
  }
}
