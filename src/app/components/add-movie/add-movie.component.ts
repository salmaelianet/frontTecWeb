import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/Movie';


export enum TypeForm{ADD,EDIT}

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {
  
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  id:number;
  name:string;
  duration:number;
  genre:string;
  actorId:number;
  
  typeForm:TypeForm;
  constructor() { this.id=null;this.typeForm=TypeForm.ADD;this.id=0; }
  

  ngOnInit() {
  }

  onSubmitForm() {
    
    const movie = {
        id:this.id,
        name:this.name,
        duration:this.duration,
        genre:this.genre,
        actorId:this.actorId
    
    }
    this.onSubmit.emit({movie,typeForm:this.typeForm});

    this.id=0;
    this.name='';
    this.duration=0;
    this.genre='';
    this.actorId=0;
    this.typeForm=TypeForm.ADD;
    console.log(movie);
  }

  loadEditData(movie:Movie,id:number){
    this.typeForm=TypeForm.EDIT;
    this.id=id;
    this.name=movie.name;
    this.duration=movie.duration;
    this.genre=movie.genre;
    this.actorId=movie.actorId;
  }



}
