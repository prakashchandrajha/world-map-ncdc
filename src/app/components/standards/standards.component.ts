import { Component } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { CommonModule } from '@angular/common';
interface Principle {
  title: string;
  description: string;
}
@Component({
  selector: 'app-standards',
  imports: [Banner,CommonModule],
  templateUrl: './standards.component.html',
  styleUrl: './standards.component.css'
})
export class StandardsComponent {
  principles: Principle[] = [
    {
      title: 'Origins and Foundations of Cooperation',
      description: 'Recognizing the pioneering experiences, communities, and ideas that gave rise to the cooperative movement and continue to inspire its identity today.'
    },
    {
      title: 'Living Traditions of Cooperation',
      description: 'Safeguarding cooperative practices, customs, and rituals that embody collective action and community self-help across generations.'
    },
    {
      title: 'Democracy in Practice',
      description: 'Celebrating cooperatives as living institutions of democratic participation, equality, and solidarity, where cultural life and governance are interconnected.'
    },
    {
      title: 'Shared Identity and Belonging',
      description: 'Honoring the cooperative way of life as a cultural marker of inclusion, belonging, and mutual care that strengthens communities.'
    },
    {
      title: 'Continuity and Transmission',
      description: 'Ensuring that cooperative knowledge, values, and practices are passed down from one generation to the next through education, storytelling, and lived experience.'
    },
    {
      title: 'Innovation Rooted in Tradition',
      description: 'Recognizing the creative renewal of cooperative practices in response to new cultural, social, and environmental challenges, while remaining faithful to cooperative values.'
    },
    {
      title: 'Solidarity Beyond Borders',
      description: 'Recognizing the exchange and adaptation of cooperative ideas across cultures and nations, building a global heritage of cooperation.'
    },
    {
      title: 'Cultural Memory and Legacy',
      description: 'Preserving archives, sites, oral histories, and symbols that bear witness to the struggles, achievements, and aspirations of cooperative communities.'
    },
    {
      title: 'Community Well-being',
      description: 'Affirming the cooperative contribution to the flourishing of communities—socially, culturally, and environmentally—as an expression of concern for the common good.'
    },
    {
      title: 'Diversity of Cooperative Expressions',
      description: 'Valuing the great variety of cooperative forms and cultural expressions as part of humanity\'s shared heritage, each rooted in its context yet connected by common values.'
    },
    {
      title: 'Resilience and Renewal',
      description: 'Recognizing the cooperative traditions that have allowed communities to recover from crises, maintain dignity, and rebuild cultural and social life.'
    },
    {
      title: 'Universal Cultural Significance of Cooperation',
      description: 'Affirming that the idea and practice of cooperation are not just a business model, but a living cultural heritage that embodies human aspirations for equity, solidarity, and democracy.'
    }
  ];
}
