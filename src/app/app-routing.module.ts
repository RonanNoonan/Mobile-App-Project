import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'latest',
    loadChildren: () => import('./latest/latest.module').then( m => m.LatestPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  
  {
    path: 'cinema',
    loadChildren: () => import('./cinema/cinema.module').then( m => m.CinemaPageModule)
  },
  {
    path: 'coming',
    loadChildren: () => import('./coming/coming.module').then( m => m.ComingPageModule)
  },
  {
    path: 'tvshows',
    loadChildren: () => import('./tvshows/tvshows.module').then( m => m.TvshowsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
