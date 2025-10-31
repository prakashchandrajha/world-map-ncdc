import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  getCooperativePrinciples(): any[] {
    return [
      {
        title: 'Historical Significance and Legacy',
        description:
          'Reflects the cooperative movement\'s roots and contributions to cultural heritage and social progress.',
        icon: 'local_library',
      },
      {
        title: 'Cooperative Cultural Value',
        description:
          'Represents the shared ethics, solidarity, and traditions that define cooperative identity.',
        icon: 'diamond_shine',
      },
      {
        title: 'Educational and Inspirational Role',
        description:
          'Encourages learning, awareness, and inspiration for future generations through cooperative examples.',
        icon: 'school',
      },
      {
        title: 'Sustainability and Continuity',
        description:
          'Demonstrates the cooperative\'s ability to endure, adapt, and remain relevant over time.',
        icon: 'nest_eco_leaf',
      },
      {
        title: 'Recognition at National, Regional, or Global Level',
        description:
          'Acknowledged for its significant impact or contribution within broader cooperative and cultural contexts.',
        icon: 'public',
      },
    ];
  }

  getIcaCchCriteria(): any[] {
    return [
      {
        title: 'Criterion 1. Historical Significance',
        description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
      },
      {
        title: 'Criterion 2. Connection to Cooperative Pioneers or Communities',
        description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
      },
      {
        title: 'Criterion 3. Archival, Architectural, or Symbolic Value',
        description: 'Sites must hold recognized value—archival, architectural, or symbolic—that reflects cooperative heritage and its cultural contribution.'
      },
      {
        title: 'Criterion 4. Active Cooperative Connection',
        description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
      },
      {title: 'Criterion 5. Living Practice of Cooperation',
        description: 'Sites shall embody cooperation as a living tradition, encouraging participation, democratic practice, and mutual aid, beyond static commemoration.'
      },
      {
        title: 'Criterion 11. Visibility and Symbolism',
        description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
      },
      {
        title: 'Criterion 12. Sustainability and Inclusivity',
        description: 'Sites shall embody cooperative values of social and environmental sustainability, inclusivity, gender equity, youth engagement, and cultural diversity.'
      },
      {
        title: 'Criterion 13. Networking and International Solidarity',
        description: 'Sites shall connect to cooperative networks—regional, national, and international—participating in exchanges, research, and cooperative tourism to strengthen global cooperative heritage.'
      }
    ];
  }
}