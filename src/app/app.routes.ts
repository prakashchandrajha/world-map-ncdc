import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { TheList } from './components/the-list/the-list';
import { Tangible } from './components/tangible/tangible';
import { Intangible } from './components/intangible/intangible';
import { AboutTangible } from './components/about-tangible/about-tangible';
import { AboutInTangibleComponent } from './components/about-in-tangible/about-in-tangible.component';
import { CoomingsoonComponent } from './components/coomingsoon/coomingsoon.component';
import { CriteriaComponent } from './components/criteria/criteria.component';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'list',component:TheList},
    {path:'tangible',component:Tangible},
    {path:'intangible',component:Intangible},
    {path:'aboutTangiblePage',component:AboutTangible},
    {path:'aboutInTangiblePage',component:AboutInTangibleComponent},
    {path:'coomingSoon',component:CoomingsoonComponent},
    {path:'criteria',component:CriteriaComponent}

];
