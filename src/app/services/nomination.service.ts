import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NominationSummary {
  id: number;
  officialName: string;
  organizationName: string;
  country: string;
  heritageCategory: string;
  contactPerson: string;
  email: string;
  submittedAt: string;
}

export interface NominationFileInfo {
  fileId: number;
  fileKey: string;
  fileName: string;
  contentType: string;
  fileSize: number;
}

export interface NominationDetail {
  id: number;
  submittedAt: string;
  organizationName: string;
  country: string;
  contactPerson: string;
  position: string;
  email: string;
  telephone: string;
  officialName: string;
  localName: string;
  otherNames: string;
  heritageCategory: string;
  tangible: boolean;
  intangible: boolean;
  communities: string;
  geographicScope: string;
  description: string;
  knowledgeTransmission: string;
  socialFunctions: string;
  holders: string;
  humanRights: string;
  safeguardingPast: string;
  safeguardingFuture: string;
  safeguardingCommunity: string;
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
  documentationInventories: string;
  consentParticipation: string;
  declarantName: string;
  declarantDesignation: string;
  declarantOrganization: string;
  declarationDate: string;
  icaMember: string;
  icaAffiliated: string;
  files: NominationFileInfo[];
}

@Injectable({
  providedIn: 'root'
})
export class NominationService {

  private apiUrl = '/api/nominations';

  constructor(private http: HttpClient) { }

  submitNomination(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getAllNominations(): Observable<NominationSummary[]> {
    return this.http.get<NominationSummary[]>(this.apiUrl);
  }

  getNominationDetail(id: number): Observable<NominationDetail> {
    return this.http.get<NominationDetail>(`${this.apiUrl}/${id}`);
  }

  downloadFile(nominationId: number, fileId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${nominationId}/files/${fileId}`, { responseType: 'blob' });
  }
}
