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

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'list',component:TheList},
    {path:'tangible',component:Tangible},
    {path:'intangible',component:Intangible},
    {
        path:'aboutTangiblePage',
        component:HeritageDetailComponent,
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
                borderColor: 'hover:border-[#7a004a]',
                buttonBg: 'bg-gradient-to-r from-[#7a004a] to-[#c7007f] text-white',
                buttonHover: 'hover:brightness-110'
            }
        }
    },
    {
        path:'aboutInTangiblePage',
        component:HeritageDetailComponent,
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
                borderColor: 'hover:border-[#FFD700]',
                buttonBg: 'bg-gradient-to-r from-[#FFD700] to-[#FFE87C] text-gray-800',
                buttonHover: 'hover:brightness-105'
            }
        }
    },
    {path:'comingSoon',component:CoomingsoonComponent},
    {path:'criteria',component:CriteriaComponent},
    {path:'nomination',component:NominationComponent},
    {path:'member',component:MembersComponent}


];
