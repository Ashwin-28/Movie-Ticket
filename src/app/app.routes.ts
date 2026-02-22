import { Routes } from '@angular/router';
import { HomeComp } from './pages/home-comp/home-comp';
import { MovieList } from './pages/movie-list/movie-list';
import { ParkingList } from './pages/parking-list/parking-list';

export const routes: Routes = [
    { path: '', component: HomeComp },
    { path: 'movies', component: MovieList },
    { path: 'parking', component: ParkingList },
];
