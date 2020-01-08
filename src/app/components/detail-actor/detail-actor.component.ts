import { Component, OnInit } from '@angular/core';
import {Actor} from 'src/app/models/Actor';
import {Subscription} from 'rxjs';
import {ActorService} from 'src/app/services/actor.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.css']
})
export class DetailActorComponent implements OnInit {
  actor: Actor;
  private routerSub: Subscription;
  actorId:number;  
  constructor(private actorService:ActorService, private route: ActivatedRoute, private router :Router) {
    this.actor=new Actor;
   }

  ngOnInit() {
    const actorId=this.route.snapshot.paramMap.get("actorId");
    this.actorService.getActor(actorId).subscribe(g=>{
      this.actor=g;
      this.actor.id=Number(actorId);
    });
    this.routerSub=this.route.params.subscribe(params => {
      this.actorId=params.actorId;
    });
    
  }
  onEdit(){ 
    this.router.navigateByUrl(`/actor/${this.actor.id}/edit`);
  }

  onDelete(actor:Actor){
    this.actorService.deleteActor(actor).subscribe();
    
    this.router.navigateByUrl(`/`);

  }
  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

}
