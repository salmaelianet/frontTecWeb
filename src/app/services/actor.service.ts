import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Actor} from '../Models/Actor'


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/Movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ActorService {

   actorsUrl:string='https://localhost:44305/api/actors';

  constructor(private http:HttpClient) { }

  GetActorsAsync():Observable<Actor[]>
  {
   return this.http.get<Actor[]>(`${this.actorsUrl}`);  
  }

   // Delete Actor
   deleteActor(actor:Actor):Observable<Actor> {
    const url = `${this.actorsUrl}/${actor.id}`;
    return this.http.delete<Actor>(url, httpOptions);
  }

   // Add Actor
   addActor(actor:Actor):Observable<Actor> {
    return this.http.post<Actor>(this.actorsUrl, actor, httpOptions);
  }
   getActor(id:string):Observable<Actor>{
    return this.http.get<Actor>(`${this.actorsUrl}/${id}`);
  }


  editActor(actor:Actor):Observable<Actor>{
  
    const url=`${this.actorsUrl}/${actor.id}`;
    return this.http.put<Actor>(url,actor,httpOptions);
  }

  getMoviesByActor(id:number){
    return this.http.get<Movie[]>(`${this.actorsUrl}/${id}/movies`); 
  }


}
