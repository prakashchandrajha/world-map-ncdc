import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NominationService, Nomination } from '../../services/nomination.service';
import { Banner } from '../../shared/banner/banner';

@Component({
  selector: 'app-submitted-nominations',
  imports: [CommonModule, Banner],
  templateUrl: './submitted-nominations.component.html',
  styleUrl: './submitted-nominations.component.css'
})
export class SubmittedNominationsComponent implements OnInit {

  nominations: Nomination[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private nominationService: NominationService) { }

  ngOnInit(): void {
    this.nominationService.getAllNominations().subscribe({
      next: (data) => {
        this.nominations = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load nominations:', err);
        this.errorMessage = 'Failed to load nominations. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}