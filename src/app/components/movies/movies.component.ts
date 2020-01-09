import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/Movie';
import {MovieService} from '../../services/movie.service';
import {TypeForm} from '../add-movie/add-movie.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent /*implements OnInit*/{
  movies:Movie[];

  constructor(private movieService:MovieService) { }

  async ngOnInit() {
    const movies=await this.movieService.GetMoviesAsync().toPromise().then(movies =>movies);
    this.movies=movies;
  }

  deleteMovie(movie:Movie) {
      // Remove From UI
      this.movies = this.movies.filter(a => a.id !== movie.id);
      // Remove from server
      this.movieService.deleteMovie(movie).subscribe();
    
  }


  onSubmit(result:any) {

    const{movie,typeForm}=result;
    if (typeForm==TypeForm.ADD)
    {
      this.movieService.addMovie(movie).subscribe(movie => {
        this.movies.push(movie);
      }); 
    }
    if(typeForm==TypeForm.EDIT)
    {
      this.movieService.editMovie(movie).subscribe((Movie)=>{
        
        this.movies = this.movies.filter(a => a.id !== movie.id);
        this.movies.push(movie);

        
      });
    }  
  }
 

}