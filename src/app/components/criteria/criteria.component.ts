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
    icon: 'fa-solid fa-landmark',
  },
  {
    title: 'Cooperative Cultural Value',
    description:
      'Represents the shared ethics, solidarity, and traditions that define cooperative identity.',
    icon: 'fa-solid fa-handshake',
  },
  {
    title: 'Educational and Inspirational Role',
    description:
      'Encourages learning, awareness, and inspiration for future generations through cooperative examples.',
    icon: 'fa-solid fa-book-open-reader',
  },
  {
    title: 'Sustainability and Continuity',
    description:
      'Demonstrates the cooperative’s ability to endure, adapt, and remain relevant over time.',
    icon: 'fa-solid fa-seedling',
  },
  {
    title: 'Recognition at National, Regional, or Global Level',
    description:
      'Acknowledged for its significant impact or contribution within broader cooperative and cultural contexts.',
    icon: 'fa-solid fa-globe',
  },
];
}
