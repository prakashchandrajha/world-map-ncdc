import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslationProvider } from './translation-provider.interface';
import { JsonTranslationProvider } from './json-translation-provider.service';
// import { GoogleTranslateProvider } from './google-translate-provider.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};
  private currentLanguage = new BehaviorSubject<string>('en');
  public currentLanguage$ = this.currentLanguage.asObservable();
  private provider: TranslationProvider;

  constructor(
    private jsonProvider: JsonTranslationProvider,
    // private googleProvider: GoogleTranslateProvider
  ) {
    this.provider = this.jsonProvider;
    this.loadLanguage('en');
  }

  loadLanguage(lang: string): void {
    this.provider.loadTranslations(lang).then((translations) => {
      this.translations = translations;
      this.currentLanguage.next(lang);
    }).catch((err) => {
      console.error('Error loading language files:', err);
    });
  }

  translate(key: string): string {
    return this.provider.translate(key, this.translations);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  // Method to switch providers in the future (e.g., to Google Translate API)
  // setProvider(providerType: 'json' | 'google'): void {
  //   if (providerType === 'google') {
  //     this.provider = this.googleProvider;
  //   } else {
  //     this.provider = this.jsonProvider;
  //   }
  //   this.loadLanguage(this.getCurrentLanguage());
  // }
}