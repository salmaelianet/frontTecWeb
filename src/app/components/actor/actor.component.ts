import { Component, OnInit } from '@angular/core';
import  {ActorService} from '../../services/actor.service'
import {Actor} from '../../Models/Actor';
import { TypeForm } from '../add-actor/add-actor.component';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actors:Actor[];
  movies:Movie[];

  constructor(private actorService:ActorService,private moviesService:MovieService) { }

  async ngOnInit() {
    const actors=await this.actorService.GetActorsAsync().toPromise().then(actors =>actors);
    this.actors=actors;

    //const movies = await this.moviesService.getMovies().toPromise().then(movies=>movies);
    //this.movies=movies;
  }
    deleteActor(actor:Actor) {
      // Remove From UI
      this.actors = this.actors.filter(a => a.id !== actor.id);
      // Remove from server
      this.actorService.deleteActor(actor).subscribe();
    
  }


  onSubmit(result:any) {
    const{actor,typeForm}=result;
    
    if (typeForm==TypeForm.ADD)
    {
      this.actorService.addActor(actor).subscribe(actor => {
        this.actors.push(actor);
      }); 
    }
    if(typeForm==TypeForm.EDIT)
    {
      this.actorService.editActor(actor).subscribe((Actor)=>{
        
        this.actors = this.actors.filter(a => a.id !== actor.id);
        this.actors.push(actor);

        
      });
    }  
  }

}
