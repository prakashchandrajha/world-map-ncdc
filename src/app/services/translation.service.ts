import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { [key: string]: string } = {};
  private currentLanguage = new BehaviorSubject<string>('en');
  public currentLanguage$ = this.currentLanguage.asObservable();

  constructor(private http: HttpClient) {
    this.loadLanguage('en');
  }

  loadLanguage(lang: string): void {
    this.http.get<{ [key: string]: string }>(`/assets/i18n/${lang}.json`).subscribe({
      next: (data) => {
        this.translations = data;
        this.currentLanguage.next(lang);
      },
      error: (err) => {
        console.error('Error loading language file:', err);
      }
    });
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }
}