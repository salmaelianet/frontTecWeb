import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/Models/Actor'
import { ActorService } from 'src/app/services/actor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-actor',
  templateUrl: './update-actor.component.html',
  styleUrls: ['./update-actor.component.css']
})
export class UpdateActorComponent implements OnInit {

  actor:Actor;
  constructor(private actorService:ActorService,private route:ActivatedRoute,private router:Router) { 
    this.actor=new Actor;
  }
  ngOnInit() {
    const actorId=this.route.snapshot.paramMap.get("actorId");
    this.actorService.getActor(actorId).subscribe(r=>{
      this.actor=r;
      this.actor.id=Number(actorId);
  })
}
  onSubmit(actor:Actor){
    this.actorService.editActor(actor).subscribe(r=> {
      this.router.navigateByUrl(`/actors`);
    })
  }
}
