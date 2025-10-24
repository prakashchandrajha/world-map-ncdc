import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { TheList } from './components/the-list/the-list';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'list',component:TheList}
];
