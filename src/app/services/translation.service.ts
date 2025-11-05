import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};
  private currentLanguage = new BehaviorSubject<string>('en');
  public currentLanguage$ = this.currentLanguage.asObservable();

  constructor(private http: HttpClient) {
    this.loadLanguage('en');
  }

  loadLanguage(lang: string): void {
    const generalTranslations$ = this.http.get(`/assets/i18n/${lang}.json`);
    const aboutTranslations$ = this.http.get(`/assets/i18n/about.${lang}.json`);
    const homeTranslations$ = this.http.get(`/assets/i18n/home.${lang}.json`);


    forkJoin([generalTranslations$, aboutTranslations$, homeTranslations$]).subscribe({
      next: ([generalData, aboutData, homeData]: [any, any, any]) => {
        this.translations = { ...generalData, ...aboutData, ...homeData };
        this.currentLanguage.next(lang);
      },
      error: (err) => {
        console.error('Error loading language files:', err);
      }
    });
  }

  translate(key: string): string {
    const value = this.getNestedValue(this.translations, key);
    if (typeof value === 'string') {
      return value;
    }
    return key;
  }

  private getNestedValue(obj: any, path: string): any {
    if (!obj || typeof obj !== 'object') return undefined;
    return path.split('.').reduce((current, key) => {
      if (current && typeof current === 'object') {
        // Handle array access like [0], [1], etc.
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

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }
}