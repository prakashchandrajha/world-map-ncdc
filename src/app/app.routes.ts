import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { TheList } from './components/the-list/the-list';
import { Tangible } from './components/tangible/tangible';
import { Intangible } from './components/intangible/intangible';
import { HeritageDetailComponent } from './components/heritage/heritage-detail.component';
import { CooperativeDetailComponent } from './components/cooperative-detail/cooperative-detail.component';
import { CoomingsoonComponent } from './components/coomingsoon/coomingsoon.component';
import { CriteriaComponent } from './components/criteria/criteria.component';
import { NominationComponent } from './components/nomination/nomination.component';
import { MembersComponent } from './components/members/members.component';
import { StandardsComponent } from './components/standards/standards.component';
import { EventsComponent } from './components/events/events.component';

// Reusable content data
const MAISON_DESJARDINS_CONTENT = {
  pageTitle: 'Maison Alphonse-Desjardins',
  pageSubtitle: 'Preserving the Spirit of Cooperation: The Alphonse Desjardins Historical Society',
  mainImage: 'assets/images/Mask group.png',
  thumbnails: [
    'assets/images/t1.png',
    'assets/images/t2.png',
    'assets/images/t3.png',
    'assets/images/t4.png'
  ],
  infoCard: {
    country: 'Brazil',
    countryFlag: 'assets/images/cntry.png',
    theme: 'Financial Group',
    entryYear: 2025,
    coordinates: '-8.706º S, -34.156º W'
  },
  sections: {
    legacy: {
      title: 'A Legacy of Vision and Community',
      content: `In 1979, officers of the Desjardins Group took a visionary step to ensure that the roots of the cooperative movement in North America would never fade from memory. They founded the Alphonse Desjardins Historical Society, an institution dedicated to preserving and celebrating the remarkable heritage of Alphonse and Dorimène Desjardins, the founders of the first credit union in North America.

The Society’s mission is both simple and profound: “to safeguard and promote the history and heritage of the Desjardins Group and its founder, for the benefit of current and future generations.” More than a historical archive, it is a living bridge connecting the ideals of cooperation, solidarity, and financial self-empowerment that shaped the movement to the realities of today’s world.`
    },
    criteria: {
      title: 'Criteria Considered',
      items: [
        {
          heading: 'Criterion 1. Historical Significance',
          description: 'Through exhibitions, educational programs, guided tours, and multimedia storytelling, the Society brings history to life. It invites visitors, students, and cooperators to engage directly with the ideas and human values that inspired Desjardins’ model — values that remain as relevant today as they were in 1900.'
        },
        {
          heading: 'Criterion 2. Educational Impact',
          description: 'The Society fosters critical engagement with cooperative principles through interactive workshops and digital archives accessible to schools and universities worldwide.'
        },
        {
          heading: 'Criterion 3. Global Relevance',
          description: 'Alphonse Desjardins’ model has inspired cooperative movements across five continents, making this site a symbol of universal financial inclusion.'
        }
      ]
    },
    virtualExperience: {
      title: 'Step Into History: A Virtual Experience',
      content: `For those unable to visit in person, the Society offers an engaging 15-minute virtual tour of the birthplace of cooperation. This online experience immerses visitors in the world of Alphonse and Dorimène Desjardins, allowing them to explore the very rooms where ideas of mutual aid, trust, and economic democracy were first shaped.

Through this digital journey, one can witness history as though standing alongside the founders themselves — hearing their story, seeing their environment, and understanding how one couple’s vision laid the groundwork for an entire cooperative movement.`,
      image: 'assets/images/Maskgroup.png'
    },
    community: {
      title: 'Serving a Broad Community',
      content: `The services of the Alphonse Desjardins Historical Society extend well beyond the walls of its archives. They are available to Desjardins Group officers, employees, and members, as well as to cooperators in Canada and abroad and indeed to the general public. Whether one is a researcher exploring the roots of cooperative banking or a visitor seeking inspiration, the Society offers a wealth of knowledge and a warm invitation to discover how ordinary people, united by shared purpose, can transform their communities.`
    },
    learnMore: {
      title: 'Learn More',
      resources: [
        'PDF report on Maison Alphonse Desjardins virtual tour',
        'Virtual tour link'
      ]
    }
  }
};

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'list', component: TheList },
  { path: 'tangible', component: Tangible },
  { path: 'intangible', component: Intangible },
  { path: 'standards', component: StandardsComponent },
  { path: 'events', component: EventsComponent },

  // Tangible Heritage Detail Page (example: Maison Desjardins)
  {
    path: 'aboutTangiblePage',
    component: HeritageDetailComponent,
    data: {
      config: {
        type: 'tangible',
        title: 'List of Tangible<br>Cooperative<br>Cultural Heritage',
        subtitle: 'Explore the cooperative traditions, practices, <br>and knowledge recognized worldwide',
        gradientBackground: 'linear-gradient(to right, #7a004a, #7a004a)',
        primaryColor: 'text-[#7a004a]',
        secondaryColor: 'text-[#ff7a00]',
        textColor: 'text-gray-700',
        bgColor: 'bg-gray-100',
        borderColor: 'border-l-[#7a004a]',
        buttonBg: 'bg-gradient-to-r from-[#7a004a] to-[#c7007f] text-white',
        buttonHover: 'hover:brightness-110'
      },
      content: MAISON_DESJARDINS_CONTENT
    }
  },

  // Intangible Heritage Detail Page (you can define different content)
  {
    path: 'aboutInTangiblePage',
    component: HeritageDetailComponent,
    data: {
      config: {
        type: 'intangible',
        title: 'List of Intangible<br>Cooperative<br>Cultural Heritage',
        subtitle: 'Explore the cooperative traditions, practices, <br>and knowledge recognized worldwide',
        gradientBackground: 'linear-gradient(to right, #6ec1e4, #fceabb)',
        primaryColor: 'text-[#5D737E]',
        secondaryColor: 'text-[#FFB347]',
        textColor: 'text-gray-600',
        bgColor: 'bg-gray-50',
        borderColor: 'border-l-[#FFD700]',
        buttonBg: 'bg-gradient-to-r from-[#FFD700] to-[#FFE87C] text-gray-800',
        buttonHover: 'hover:brightness-105'
      },
      content: MAISON_DESJARDINS_CONTENT // ← or a different object
    }
  },

  { path: 'comingSoon', component: CoomingsoonComponent },
  { path: 'criteria', component: CriteriaComponent },
  { path: 'nomination', component: NominationComponent },
  { path: 'member', component: MembersComponent },
  { path: 'cooperative/:id', component: CooperativeDetailComponent }
];