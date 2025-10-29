import { Component } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criteria',
  imports: [Banner,CommonModule],
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.css'
})
export class CriteriaComponent {
COOPERATIVE_PRINCIPLES: any[] = [
  {
    title: 'Historical Significance and Legacy',
    description:
      'Reflects the cooperative movement’s roots and contributions to cultural heritage and social progress.',
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
      'Demonstrates the cooperative’s ability to endure, adapt, and remain relevant over time.',
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
