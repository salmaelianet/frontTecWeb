import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ActorComponent} from './components/actor/actor.component';
import{HomeComponent} from './pages/home/home.component';
import{MoviesComponent} from './components/movies/movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'actors', component: ActorComponent, },
  { path: 'movies', component: MoviesComponent, }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
