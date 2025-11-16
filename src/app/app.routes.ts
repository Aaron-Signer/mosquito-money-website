import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Shows } from './shows/shows';

export const routes: Routes = [
    {path: 'home', component: Home, title: 'Home'},
    { path: 'shows', component: Shows, title: 'Shows'}
];
