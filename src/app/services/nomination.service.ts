import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface NominationForm {
  id?: number;
  // Section A
  organizationName: string;
  country: string;
  contactPerson: string;
  position: string;
  email: string;
  telephone: string;
  // Section B
  officialName: string;
  localName: string;
  otherNames: string;
  // Section C
  tangible: boolean;
  intangible: boolean;
  // Section D
  communities: string;
  // Section E
  geographicScope: string;
  // Section F
  description: string;
  // Section G
  holders: string;
  // Section H
  knowledgeTransmission: string;
  // Section I
  socialFunctions: string;
  // Section J
  humanRights: string;
  // Section K
  safeguardingPast: string;
  safeguardingFuture: string;
  safeguardingCommunity: string;
  // Section L
  visibilityCooperative: string;
  dialogueBetweenCommunities: string;
  respectDiversity: string;
  // Section M
  criterion1: boolean;
  criterion2: boolean;
  criterion3: boolean;
  criterion4: boolean;
  criterion5: boolean;
  criterion6: boolean;
  criterion7: boolean;
  criterion8: boolean;
  criterion9: boolean;
  criterion10: boolean;
  criterion11: boolean;
  criterion12: boolean;
  criterion13: boolean;
  criteriaExplanation: string;
  // Section N
  consentParticipation: string;
  // Section O
  documentationInventories: string;
  // Section P
  lettersConsentFile?: string;
  photosFile?: string;
  video: boolean;
  archivalMaterialsFile?: string;
  referencesFile?: string;
  // Section Q
  declarantName: string;
  declarantDesignation: string;
  declarantOrganization: string;
  declarationDate: string;
  // Metadata
  submissionDate?: string;
  createdAt?: string;
}

export interface FormSummary {
  id: number;
  organizationName: string;
  country: string;
  officialName: string;
  contactPerson: string;
  submissionDate: string;
  hasLettersConsent?: boolean;
  hasPhotos?: boolean;
  hasArchivalMaterials?: boolean;
  hasReferences?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NominationService {
  private apiUrl = 'https://www.culturalheritage.coop/cch/api/forms';

  constructor(private http: HttpClient) { }

  submitForm(formData: FormData): Observable<NominationForm> {
    return this.http.post<NominationForm>(this.apiUrl, formData);
  }

  getAllForms(): Observable<FormSummary[]> {
    return this.http.get<FormSummary[]>(`${this.apiUrl}/summary`);
  }

  getFormById(id: number): Observable<NominationForm> {
    return this.http.get<NominationForm>(`${this.apiUrl}/${id}`);
  }

  downloadPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/pdf`, { responseType: 'blob' });
  }

  getFileUrl(id: number, fileType: string): string {
    return `${this.apiUrl}/${id}/file/${fileType}`;
  }

  deleteForm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
