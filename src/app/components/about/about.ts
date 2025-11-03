import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import { AboutService } from '../../services/about.service';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Banner, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, OnDestroy {
  faqs: any[] = [];
  private languageSubscription: Subscription = new Subscription();

  constructor(
    private aboutService: AboutService,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    this.faqs = this.aboutService.getFaqs();
  }

  ngOnInit(): void {
    // Force re-render when language changes
    this.languageSubscription = this.translationService.currentLanguage$.subscribe(() => {
      // Trigger change detection for template updates
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
