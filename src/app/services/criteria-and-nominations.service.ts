import { Injectable } from '@angular/core';
// src/app/models/criteria.model.ts
export interface Criterion {
  id: number;
  title: string;
  img:string,
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class CriteriaAndNominationsService {

  constructor() { }

  private readonly criteriaData: Criterion[] = [
    {
      id: 1,
      title: 'Historical Significance',
      img:'../../../assets/images/Vector.png',

      description: 'Sites must be at least thirty (30) years old, preferably sixty (60), or directly associated with foundational events, milestones, or figures in the cooperative movement.'
    },
    {
      id: 2,
      title: 'Connection to Cooperative Pioneers or Communities',
            img:'../../../assets/images/111.png',

      description: 'Sites must demonstrate a tangible link to cooperative pioneers, enterprises, federations, or communities that shaped cooperative practice and identity.'
    },
    {
      id: 3,
      title: 'Archival, Architectural, or Symbolic Value',
            img:'../../../assets/images/222.png',

      description: 'Represents milestones in cooperative development. Preserves stories, traditions, or knowledge tied to cooperative evolution.'
    },
    {
      id: 4,
      title: 'Active Cooperative Connection',
            img:'../../../assets/images/333.png',

      description: 'Sites must either remain in operation as cooperatives or be explicitly dedicated to preserving and interpreting cooperative history.'
    },
    {
      id: 5,
      title: 'Living Practice of Cooperation',
            img:'../../../assets/images/444.png',
      description: 'Sites shall embody cooperation as a living tradition, encouraging participation, democratic practice, and mutual aid, beyond static commemoration.'
    },
    {
      id: 6,
      title: 'Educational Mission',
            img:'../../../assets/images/555.png',
      description: 'Sites shall actively promote cooperative literacy through exhibitions, archives, guided tours, and programmes that teach the ICA Statement on the Cooperative Identity.'
    },
    {
      id: 7,
      title: 'Research and Knowledge Sharing',
            img:'../../../assets/images/666.png',
      description: 'Sites shall contribute to cooperative research and knowledge dissemination, in collaboration with universities, archives, and digital platforms.'
    },
    {
      id: 8,
      title: 'Community and Member Engagement',
            img:'../../../assets/images/777.png',
      description: 'Sites shall be embedded within their communities, ensuring active participation, ownership, and collective stewardship by local members and residents.'
    },
    {
      id: 9,
      title: 'Accessibility for All',
            img:'../../../assets/images/888.png',
      description: 'Sites must guarantee accessibility to the public—physically, digitally, or through interpretive materials—and ensure inclusivity for all people regardless of age, gender, background, or ability.'
    },
    {
      id: 10,
      title: 'Preservation and Safeguarding',
            img:'../../../assets/images/101010.png',
      description: 'Sites shall commit to the safeguarding of cooperative records, artifacts, oral traditions, and buildings through sustainable conservation strategies.'
    },
    {
      id: 11,
      img:'../../../assets/images/111.png',

      title: 'Visibility and Symbolism',
      description: 'Sites shall enhance the visibility of cooperation in public spaces through monuments, plaques, murals, and symbolic interpretation integrated within broader heritage narratives.'
    },
    {
      id: 12,
            img:'../../../assets/images/121212.png',
      title: 'Sustainability and Inclusivity',
      description: 'Sites shall embody cooperative values of social and environmental sustainability, inclusivity, gender equity, youth engagement, and cultural diversity.'
    },
    {
      id: 13,
      img:'../../../assets/images/131313.png',
      title: 'Networking and International Solidarity',
      description: 'Sites shall connect to cooperative networks—regional, national, and international—participating in exchanges, research, and cooperative tourism to strengthen global cooperative heritage.'
    }
  ];

  getCriteria(): Criterion[] {
    return [...this.criteriaData]; // Return a copy to prevent mutation
  }

  getCriterionById(id: number): Criterion | undefined {
    return this.criteriaData.find(c => c.id === id);
  }
}
