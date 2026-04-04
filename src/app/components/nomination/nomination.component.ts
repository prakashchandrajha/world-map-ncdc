import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NominationService } from '../../services/nomination.service';
import { Banner } from '../../shared/banner/banner';

@Component({
  selector: 'app-nomination',
  imports: [CommonModule, ReactiveFormsModule, Banner],
  templateUrl: './nomination.component.html',
  styleUrl: './nomination.component.css'
})
export class NominationComponent {

  nominationForm: FormGroup;
  showSuccessModal = false;
  isSubmitting = false;

  // store files
  selectedFiles: { [key: string]: File | File[] } = {};

  constructor(
    private fb: FormBuilder,
    private nominationService: NominationService
  ) {
    this.nominationForm = this.createForm();
  }

  // ================= FORM =================
  createForm(): FormGroup {
    return this.fb.group({

      // Section A
      organizationName: [''],
      country: [''],
      contactPerson: [''],
      position: [''],
      email: [''],
      telephone: [''],

      // Section B
      officialName: [''],
      localName: [''],
      otherNames: [''],

      // Section C
      heritageCategory: [''],

      // Section D
      communities: ['',Validators.required],

      // Section E
      geographicScope: ['',Validators.required],

      // Section F
      description: ['',Validators.required],

      // Section G
      holders: ['',Validators.required],

      // Section H
      knowledgeTransmission: ['',Validators.required],

      // Section I
      socialFunctions: ['',Validators.required],

      // Section J
      humanRights: ['',Validators.required],

      // Section K
      safeguardingPast: ['',Validators.required],
      safeguardingFuture: [''],
      safeguardingCommunity: ['',Validators.required],

      // Section L (Criteria)
      criterion1: [false],
      criterion2: [false],
      criterion3: [false],
      criterion4: [false],
      criterion5: [false],
      criterion6: [false],
      criterion7: [false],
      criterion8: [false],
      criterion9: [false],
      criterion10: [false],
      criterion11: [false],
      criterion12: [false],
      criterion13: [false],
      criteriaExplanation: [''],

      // Section M
      consentParticipation: [''],

      // Section N
      documentationInventories: [''],

      // Section P (Declaration)
      declarantName: [''],
      declarantDesignation: [''],
      declarantOrganization: [''],
      declarationDate: [''],
      icaMember: [''],
      icaAffiliated: ['']

    });
  }

  // ================= FILE HANDLING =================
  onFileChange(event: any, fieldName: string): void {
    const files: FileList = event.target.files;

    if (files && files.length > 0) {

      // photos (multiple)
      if (fieldName === 'photos') {
        const fileArray = Array.from(files);

        // limit to 5
        if (fileArray.length > 5) {
          alert('Maximum 5 photos allowed');
          return;
        }

        this.selectedFiles[fieldName] = fileArray;

      } else {
        // single file (PDF fields)
        this.selectedFiles[fieldName] = files[0];
      }

    } else {
      delete this.selectedFiles[fieldName];
    }
  }

  // ================= RESET =================
  resetForm(): void {
    this.nominationForm.reset({
      ...this.createForm().getRawValue()
    });

    this.selectedFiles = {};
    this.isSubmitting = false;
  }

  // ================= SUBMIT =================
  onSubmit(): void {

    if (this.isSubmitting) return;

    this.isSubmitting = true;

    const formValue = this.nominationForm.getRawValue();

    const formData = new FormData();

    // Append every field individually so backend @ModelAttribute can bind
    Object.keys(formValue).forEach(key => {
      const val = formValue[key];
      if (val !== null && val !== undefined && val !== '') {
        formData.append(key, String(val));
      }
    });

    // ===== FILES =====

    if (this.selectedFiles['lettersConsent']) {
      formData.append('lettersConsent', this.selectedFiles['lettersConsent'] as File);
    }

    if (this.selectedFiles['photos']) {
      const photos = this.selectedFiles['photos'];

      if (Array.isArray(photos)) {
        photos.forEach(photo => formData.append('photos', photo));
      } else {
        formData.append('photos', photos as File);
      }
    }

    if (this.selectedFiles['archivalMaterials']) {
      formData.append('archivalMaterials', this.selectedFiles['archivalMaterials'] as File);
    }

    if (this.selectedFiles['references']) {
      formData.append('references', this.selectedFiles['references'] as File);
    }

    // ===== CALL BACKEND =====
    this.nominationService.submitNomination(formData).subscribe({
      next: () => {
        this.showSuccessModal = true;
        this.isSubmitting = false;
      },
      error: (err: any) => {
        console.error('Nomination submission failed:', err);
        this.isSubmitting = false;
      }
    });
  }

  // ================= MODAL =================
  closeModal(): void {
    this.showSuccessModal = false;
  }
}