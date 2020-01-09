import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import{Observable}from 'rxjs'
import { Movie } from '../models/Movie';


const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieUrl:string='https://localhost:44322/api/movies';

  constructor(private http:HttpClient) { }

  GetMoviesAsync():Observable<Movie[]>
  {
   return this.http.get<Movie[]>(`${this.movieUrl}`);  
  }

   // Delete Movie
   deleteMovie(movie:Movie):Observable<Movie> {
    const url = `${this.movieUrl}/${movie.id}`;
    return this.http.delete<Movie>(url, httpOptions);
  }

   // Add Movie
   addMovie(movie:Movie):Observable<Movie> {
    return this.http.post<Movie>(this.movieUrl, movie, httpOptions);
  }


   getMovie(id:string):Observable<Movie>{
    return this.http.get<Movie>(`${this.movieUrl}/${id}`);
  }


  editMovie(movie:Movie):Observable<Movie>{
  
    const url=`${this.movieUrl}/${movie.id}`;
    return this.http.put<Movie>(url,movie,httpOptions);
  }



}
