import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { TheList } from './components/the-list/the-list';
import { Tangible } from './components/tangible/tangible';
import { Intangible } from './components/intangible/intangible';
import { HeritageDetailComponent } from './components/heritage/heritage-detail.component';
import { CoomingsoonComponent } from './components/coomingsoon/coomingsoon.component';
import { CriteriaComponent } from './components/criteria/criteria.component';
import { NominationComponent } from './components/nomination/nomination.component';
import { MembersComponent } from './components/members/members.component';
import { StandardsComponent } from './components/standards/standards.component';
import { EventsComponent } from './components/events/events.component';
import { CriteriaAndNominationsComponent } from './components/criteria-and-nominations/criteria-and-nominations.component';
import { Toolkit } from './components/toolkit/toolkit';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'list', component: TheList },
  { path: 'tangible', component: Tangible },
  { path: 'intangible', component: Intangible },
  { path: 'standards', component: StandardsComponent },
  { path: 'events', component: EventsComponent },
   { path: 'toolkit', component:Toolkit },

  {path:'criteriaAndNomination',component:CriteriaAndNominationsComponent},

  // Tangible Heritage Detail Page
  {
    path: 'aboutTangiblePage/:id',
    component: HeritageDetailComponent
  },

  // Intangible Heritage Detail Page
  {
    path: 'aboutInTangiblePage/:id',
    component: HeritageDetailComponent
  },

  { path: 'comingSoon', component: CoomingsoonComponent },
  { path: 'criteria', component: CriteriaComponent },
  { path: 'nomination', component: NominationComponent },
  { path: 'member', component: MembersComponent },
];