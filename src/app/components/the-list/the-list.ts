import { Component } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-the-list',
  imports: [Banner,RouterLink],
  templateUrl: './the-list.html',
  styleUrl: './the-list.css'
})
export class TheList {
  private languageSubscription: Subscription = new Subscription();

  constructor(private translationService: TranslationService) {
    this.languageSubscription = this.translationService.currentLanguage$.subscribe(() => {
      // Trigger change detection for template updates
    });
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
