import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NominationService, FormSummary } from '../../services/nomination.service';
import { Banner } from '../../shared/banner/banner';

@Component({
  selector: 'app-submitted-nominations',
  imports: [CommonModule, Banner],
  templateUrl: './submitted-nominations.component.html',
  styleUrl: './submitted-nominations.component.css'
})
export class SubmittedNominationsComponent implements OnInit {
  nominations: FormSummary[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private nominationService: NominationService) { }

  ngOnInit(): void {
    this.loadNominations();
  }

  loadNominations(): void {
    this.isLoading = true;
    this.nominationService.getAllForms().subscribe({
      next: (data) => {
        this.nominations = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading nominations:', error);
        this.error = 'Failed to load nominations. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  downloadPdf(id: number, officialName: string): void {
    this.nominationService.downloadPdf(id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `nomination_${officialName || id}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Error downloading PDF:', error);
        alert('Error downloading PDF. Please try again.');
      }
    });
  }
}
