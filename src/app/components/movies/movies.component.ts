import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/Movie';
import {MovieService} from '../../services/movie.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie[];
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => {
      this.movies=movies;
    });
  }
  deleteMovie(movie:Movie){
    this.movies=this.movies.filter(m => m.id !== movie.id);
    this.movieService.DeleteMovie(movie).subscribe();
    
  }
  addMovie(movie:Movie) {
    this.movieService.addMovie(movie).subscribe(movie => {
      this.movies.push(movie);
    });
  }

}
