import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Actor } from 'src/app/Models/Actor';

export enum TypeForm{ ADD,EDIT}

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  id:number;
  name:string;
  lastname:String;
  age:number;

  typeForm:TypeForm;
  constructor() { this.id=null;this.typeForm=TypeForm.ADD;this.id=0;}

  ngOnInit() {
  }

  onSubmitForm() {
    const actor = {
      
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      age: this.age
    }

    
    this.onSubmit.emit({actor,typeForm:this.typeForm});
    this.id=null;
    this.typeForm=TypeForm.ADD;
    this.name='';
    this.lastname='';
    this.age=0;
    this.id=0;
    console.log(actor);

  }

  loadEditData (actor:Actor,id:number){
    this.typeForm=TypeForm.EDIT;
    this.id=id;
    this.name=actor.name;
    this.lastname=actor.lastname;
    this.age=actor.age;
    
  }

}
