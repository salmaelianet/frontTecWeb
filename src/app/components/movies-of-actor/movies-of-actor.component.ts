import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movies-of-actor',
  templateUrl: './movies-of-actor.component.html',
  styleUrls: ['./movies-of-actor.component.css']
})
export class MoviesOfActorComponent implements OnInit {

  @Input() movies:Movie[];
  constructor() { }

  ngOnInit() {
  }

}
