import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './components/actor/actor.component';
import { ActorItemComponent } from './components/actor-item/actor-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddActorComponent } from './components/add-actor/add-actor.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateActorComponent } from './components/update-actor/update-actor.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { MoviesOfActorComponent } from './components/movies-of-actor/movies-of-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    ActorItemComponent,
    HeaderComponent,
    AddActorComponent,
    HomeComponent,
    UpdateActorComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    MovieItemComponent,
    MoviesComponent,
    DetailActorComponent,
    DetailMovieComponent,
    MoviesOfActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
