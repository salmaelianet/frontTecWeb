import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ActorService } from '../../services/actor.service';

import { Actor } from 'src/app/Models/Actor';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {

  showMovies:boolean;
  public movies:Movie[];

  @Input() actor: Actor;
  @Output() deleteActor: EventEmitter<number> = new EventEmitter();
  @Output() editActor: EventEmitter<Actor> = new EventEmitter();

  constructor(private actorService:ActorService,private router:Router,private moviesService:MovieService) { 
    this.showMovies=false;
    this.movies=[];
  }

  async ngOnInit() {
    const movies = await this.actorService.getMoviesByActor(this.actor.id).toPromise().then(movies=>movies);
    this.movies=movies;

    
  }
  setClasses(){
    let classes = {
      actor:true,
    }
    return classes;
  }

  onDelete(actor) {
      this.deleteActor.emit(actor);
      
  }

  onEdit(actor:Actor){
    this.editActor.emit(actor);
    //this.router.navigateByUrl(`/actors/${actor.id}/edit`);
  }
  onDetail(actor:Actor){
    this.router.navigateByUrl(`/actors/${actor.id}`);
  }


}
