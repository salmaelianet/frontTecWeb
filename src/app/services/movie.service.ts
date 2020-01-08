import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import{Observable}from 'rxjs'
import { Movie } from '../models/Movie';
import { identifierModuleUrl } from '@angular/compiler';

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

  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.movieUrl}`);
  }


  DeleteMovie(movie:Movie):Observable<number>{
    const url= `${this.movieUrl}/${movie.id}`;
    return this.http.delete<number>(url,httpOptions);
  }

  addMovie(movie:Movie):Observable<Movie> {
    return this.http.post<Movie>(this.movieUrl, movie, httpOptions);
  }

  getMovie(id:string):Observable<Movie>{
    return this.http.get<Movie>(`${this.movieUrl}/${id}`);
  }

  editMovie(movie:Movie):Observable<any>{
    const url=`${this.movieUrl}/${movie.id}`;
    return this.http.put(url,movie,httpOptions);
  }
}
