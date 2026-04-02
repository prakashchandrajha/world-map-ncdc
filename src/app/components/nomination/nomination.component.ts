import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  selectedFiles: { [key: string]: File } = {};

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
      tangible: [false],
      intangible: [false],
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
    const file = event.target.files[0];
    if (file) {
      this.selectedFiles[fieldName] = file;
    } else {
      delete this.selectedFiles[fieldName];
    }
  }

  onSubmit(): void {
    if (this.nominationForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const formValue = this.nominationForm.value;
      
      const formData = new FormData();
      formData.append('form', new Blob([JSON.stringify(formValue)], { type: 'application/json' }));
      
      if (this.selectedFiles['lettersConsent']) {
        formData.append('lettersConsent', this.selectedFiles['lettersConsent']);
      }
      if (this.selectedFiles['photos']) {
        formData.append('photos', this.selectedFiles['photos']);
      }
      if (this.selectedFiles['archivalMaterials']) {
        formData.append('archivalMaterials', this.selectedFiles['archivalMaterials']);
      }
      if (this.selectedFiles['references']) {
        formData.append('references', this.selectedFiles['references']);
      }
      
      this.nominationService.submitForm(formData as any).subscribe({
        next: () => {
          this.showSuccessModal = true;
          this.isSubmitting = false;
          this.nominationForm.reset(this.createForm().getRawValue());
          this.selectedFiles = {};
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          alert('Error submitting form. Please try again.');
          this.isSubmitting = false;
        }
      });
    }
  }

  closeModal(): void {
    this.showSuccessModal = false;
  }
}
