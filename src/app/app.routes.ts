import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home),
    title: 'Home - Cooperative Culture Heritage'
  },
  {
    path:'stewardship',
    loadComponent: () => import('./components/stewardship/stewardship').then(m => m.Stewardship),
    title: 'Stewardship - Cooperative Culture Heritage'
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About),
    title: 'About - Cooperative Culture Heritage'
  },
  {
    path: 'list',
    loadComponent: () => import('./components/the-list/the-list').then(m => m.TheList),
    title: 'Heritage List - Cooperative Culture Heritage'
  },
  {
    path: 'tangible',
    loadComponent: () => import('./components/tangible/tangible').then(m => m.Tangible),
    title: 'Tangible Heritage - Cooperative Culture Heritage'
  },
  {
    path: 'intangible',
    loadComponent: () => import('./components/intangible/intangible').then(m => m.Intangible),
    title: 'Intangible Heritage - Cooperative Culture Heritage'
  },
  {
    path: 'standards',
    loadComponent: () => import('./components/standards/standards.component').then(m => m.StandardsComponent),
    title: 'Standards - Cooperative Culture Heritage'
  },
  {
    path: 'events',
    loadComponent: () => import('./components/events/events.component').then(m => m.EventsComponent),
    title: 'Events - Cooperative Culture Heritage'
  },
  {
    path: 'toolkit',
    loadComponent: () => import('./components/toolkit/toolkit').then(m => m.Toolkit),
    title: 'Toolkit - Cooperative Culture Heritage'
  },
  {
    path: 'criteriaAndNomination',
    loadComponent: () => import('./components/criteria-and-nominations/criteria-and-nominations.component').then(m => m.CriteriaAndNominationsComponent),
    title: 'Criteria and Nominations - Cooperative Culture Heritage'
  },

  // Tangible Heritage Detail Page
  {
    path: 'aboutTangiblePage/:id',
    loadComponent: () => import('./components/heritage/heritage-detail.component').then(m => m.HeritageDetailComponent),
    title: 'Tangible Heritage Details - Cooperative Culture Heritage'
  },

  // Intangible Heritage Detail Page
  {
    path: 'aboutInTangiblePage/:id',
    loadComponent: () => import('./components/heritage/heritage-detail.component').then(m => m.HeritageDetailComponent),
    title: 'Intangible Heritage Details - Cooperative Culture Heritage'
  },

  {
    path: 'comingSoon',
    loadComponent: () => import('./components/coomingsoon/coomingsoon.component').then(m => m.CoomingsoonComponent),
    title: 'Coming Soon - Cooperative Culture Heritage'
  },
  {
    path: 'criteria',
    loadComponent: () => import('./components/criteria/criteria.component').then(m => m.CriteriaComponent),
    title: 'Criteria - Cooperative Culture Heritage'
  },
  {
    path: 'nomination',
    loadComponent: () => import('./components/nomination/nomination.component').then(m => m.NominationComponent),
    title: 'Nomination - Cooperative Culture Heritage'
  },
  {
    path: 'submitted-nominations',
    loadComponent: () => import('./components/submitted-nominations/submitted-nominations.component').then(m => m.SubmittedNominationsComponent),
    title: 'Submitted Nominations - Cooperative Culture Heritage'
  },
  {
    path: 'nomination-detail/:id',
    loadComponent: () => import('./components/nomination-detail/nomination-detail.component').then(m => m.NominationDetailComponent),
    title: 'Nomination Detail - Cooperative Culture Heritage'
  },
  {
    path: 'member',
    loadComponent: () => import('./components/members/members.component').then(m => m.MembersComponent),
    title: 'Members - Cooperative Culture Heritage'
  },

  // Wildcard route for 404 - must be last
  {
    path: '**',
    redirectTo: '/comingSoon',
    pathMatch: 'full'
  }
];