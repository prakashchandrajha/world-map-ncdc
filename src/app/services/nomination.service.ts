import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Nomination {
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
  // Section D–K
  communities: string;
  geographicScope: string;
  description: string;
  holders: string;
  knowledgeTransmission: string;
  socialFunctions: string;
  humanRights: string;
  safeguardingPast: string;
  safeguardingFuture: string;
  safeguardingCommunity: string;
  // Section L
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
  // Section M–N
  consentParticipation: string;
  documentationInventories: string;
  // Section P
  declarantName: string;
  declarantDesignation: string;
  declarantOrganization: string;
  declarationDate: string;
  icaMember: string;
  icaAffiliated: string;
  // Metadata
  createdAt?: string;
}

// kept for backward compat if anything else imports it
export type FormSummary = Nomination;

@Injectable({
  providedIn: 'root'
})
export class NominationService {
  // private apiUrl = 'http://localhost:2003/cch/api/nominations';
  private apiUrl = 'https://www.culturalheritage.coop/cch/api/nominations';

  constructor(private http: HttpClient) { }

  /** POST multipart/form-data — returns the saved nomination id */
  submitNomination(formData: FormData): Observable<number> {
    return this.http.post<number>(this.apiUrl, formData);
  }

  /** GET all nominations */
  getAllNominations(): Observable<Nomination[]> {
    return this.http.get<Nomination[]>(this.apiUrl);
  }
}
