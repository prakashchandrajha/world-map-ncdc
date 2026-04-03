import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NominationService,
  NominationDetail,
  NominationFileInfo
} from '../../services/nomination.service';
import { Banner } from '../../shared/banner/banner';

@Component({
  selector: 'app-nomination-detail',
  imports: [CommonModule, Banner],
  templateUrl: './nomination-detail.component.html',
  styleUrl: './nomination-detail.component.css'
})
export class NominationDetailComponent implements OnInit {

  nomination: NominationDetail | null = null;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nominationService: NominationService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.errorMessage = 'Invalid nomination ID.';
      this.isLoading = false;
      return;
    }
    this.loadNomination(+id);
  }

  loadNomination(id: number): void {
    this.isLoading = true;
    this.nominationService.getNominationDetail(id).subscribe({
      next: (data) => {
        this.nomination = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load nomination detail:', err);
        this.errorMessage = 'Failed to load nomination details.';
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/submitted-nominations']);
  }

  downloadFile(file: NominationFileInfo): void {
    if (!this.nomination) return;
    this.nominationService.downloadFile(this.nomination.id, file.fileId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Failed to download file:', err);
        alert('Failed to download file.');
      }
    });
  }

  boolLabel(val: boolean | undefined): string {
    return val ? 'Yes' : 'No';
  }

  getCategoryLabel(category: string): string {
    if (category === 'tangible') return 'Tangible Heritage';
    if (category === 'intangible') return 'Intangible Heritage';
    return category || '—';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
}
