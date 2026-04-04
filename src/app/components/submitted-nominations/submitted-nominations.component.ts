import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NominationService, NominationSummary } from '../../services/nomination.service';
import { Banner } from '../../shared/banner/banner';

@Component({
  selector: 'app-submitted-nominations',
  imports: [CommonModule, Banner],
  templateUrl: './submitted-nominations.component.html',
  styleUrl: './submitted-nominations.component.css'
})
export class SubmittedNominationsComponent implements OnInit {

  nominations: NominationSummary[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private nominationService: NominationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadNominations();
  }

  loadNominations(): void {
    this.isLoading = true;
    this.nominationService.getAllNominations().subscribe({
      next: (data: NominationSummary[]) => {
        console.log('=== LOADED NOMINATIONS ===');
        console.log('Count:', data.length);
        console.log('Data:', JSON.stringify(data, null, 2));
        this.nominations = data;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Failed to load nominations:', err);
        this.errorMessage = 'Failed to load nominations. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  viewFullForm(id: number): void {
    this.router.navigate(['/nomination-detail', id]);
  }

  getCategoryLabel(category: string): string {
    if (category === 'tangible') return 'Tangible';
    if (category === 'intangible') return 'Intangible';
    return '—';
  }
}