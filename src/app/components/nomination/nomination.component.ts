import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NominationService, NominationForm } from '../../services/nomination.service';
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
  selectedFiles: { [key: string]: File | File[] } = {};

  constructor(
    private fb: FormBuilder,
    private nominationService: NominationService
  ) {
    this.nominationForm = this.createForm();
  }

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
  heritageCategory: ['', Validators.required],
  icaMember: ['', Validators.required],
  icaAffiliated: ['', Validators.required],
      // Section D
      communities: [''],
      // Section E
      geographicScope: [''],
      // Section F
      description: [''],
      // Section G
      holders: [''],
      // Section H
      knowledgeTransmission: [''],
      // Section I
      socialFunctions: [''],
      // Section J
      humanRights: [''],
      // Section K
      safeguardingPast: [''],
      safeguardingFuture: [''],
      safeguardingCommunity: [''],
      // Section L
      visibilityCooperative: [''],
      dialogueBetweenCommunities: [''],
      respectDiversity: [''],
      // Section M
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
      // Section N
      consentParticipation: [''],
      // Section O
      documentationInventories: [''],
      // Section P
  video: [false],
      // Section Q
      declarantName: [''],
      declarantDesignation: [''],
      declarantOrganization: [''],
      declarationDate: ['']
    });
  }

  onFileChange(event: any, fieldName: string): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      if (fieldName === 'photos') {
        this.selectedFiles[fieldName] = Array.from(files);
      } else {
        this.selectedFiles[fieldName] = files[0];
      }
    } else {
      delete this.selectedFiles[fieldName];
    }
  }

  onSubmit(): void {
    if (this.nominationForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const formValue = this.nominationForm.value;
      const payload = {
        ...formValue,
        tangible: formValue.heritageCategory === 'tangible',
        intangible: formValue.heritageCategory === 'intangible',
      };

      delete payload.heritageCategory;
      
      const formData = new FormData();
      formData.append('form', new Blob([JSON.stringify(payload)], { type: 'application/json' }));
      
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

      // DEBUG: Do not call backend API now, just dump payload to console and complete
      console.log('Nomination form submit payload:', {
        form: payload,
        files: {
          lettersConsent: this.selectedFiles['lettersConsent'],
          photos: this.selectedFiles['photos'],
          archivalMaterials: this.selectedFiles['archivalMaterials'],
          references: this.selectedFiles['references'],
        }
      });
      this.showSuccessModal = true;
      this.isSubmitting = false;
      this.nominationForm.reset(this.createForm().getRawValue());
      this.selectedFiles = {};
      return;
    }
  }

  closeModal(): void {
    this.showSuccessModal = false;
  }
}
