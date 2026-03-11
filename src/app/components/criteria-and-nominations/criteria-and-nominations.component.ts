import { Component, OnInit } from '@angular/core';
import { CriteriaAndNominationsService, Criterion } from '../../services/criteria-and-nominations.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Banner } from "../../shared/banner/banner";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-criteria-and-nominations',
  imports: [CommonModule, RouterLink, Banner, TranslateModule],
  templateUrl: './criteria-and-nominations.component.html',
  styleUrl: './criteria-and-nominations.component.css'
})
export class CriteriaAndNominationsComponent implements OnInit {
  criteria: Criterion[] = [];
  isComingSoonModalOpen = false;

  constructor(
    private criteriaService: CriteriaAndNominationsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // Listen for language changes and reload data accordingly
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslatedCriteria();
    });

    // Load initial data
    this.loadTranslatedCriteria();
  }

  private async loadTranslatedCriteria() {
    const currentLang = this.translate.currentLang || 'en';
    this.criteria = await this.criteriaService.getTranslatedCriteria(currentLang);
  }

  trackByCriterionId(index: number, criterion: Criterion): number {
    return criterion.id;
  }

  openComingSoonModal(): void {
    this.isComingSoonModalOpen = true;
  }

  closeComingSoonModal(): void {
    this.isComingSoonModalOpen = false;
  }

  closeComingSoonModalOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fixed')) {
      this.isComingSoonModalOpen = false;
    }
  }
}