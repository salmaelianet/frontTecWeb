import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  @Output() addMovie: EventEmitter<any> = new EventEmitter();
  constructor() { }
    Id:number;
    Name:string;
    Duration:number;
    Genre:string;
    ActorId:number;


  ngOnInit() {
  }

  onSubmit() {
    
    const movie = {
        Id:this.Id,
        Name:this.Name,
        Duration:this.Duration,
        Genre:this.Genre,
        ActorId:this.ActorId
    
    }
    this.addMovie.emit(movie);
    console.log(movie);
  }



}
