export interface TranslationProvider {
  loadTranslations(lang: string): Promise<any>;
  translate(key: string, translations: any): string;
}