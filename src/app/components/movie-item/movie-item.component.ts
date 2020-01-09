import { Movie } from 'src/app/models/Movie';
import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie:Movie;
  @Output() editMovie: EventEmitter<Movie>= new EventEmitter();
  @Output() deleteMovie: EventEmitter<number>= new EventEmitter();
  constructor(private movieService:MovieService,private router: Router) { }


  ngOnInit() {
  }

  setClasses() {
    let classes = {
      guest: true
    }

    return classes;
  }

  onDelete(movie){
    this.deleteMovie.emit(movie);
  }
  
  onEdit(movie:Movie){
    this.editMovie.emit(movie);
  }
  onDetail(movie:Movie){
    this.router.navigateByUrl(`/actors/${movie.actorId}/movies/${movie.id}`);

  }

}
