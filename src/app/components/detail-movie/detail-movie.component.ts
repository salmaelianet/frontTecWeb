import { Component, OnInit } from '@angular/core';
import {Movie} from 'src/app/models/Movie'
import {Subscription} from 'rxjs'
import {MovieService} from 'src/app/services/movie.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  movie: Movie;
  private routerSub: Subscription;
    
  constructor(private movieService:MovieService, private route: ActivatedRoute, private router :Router) {
    this.movie=new Movie;
   }

  ngOnInit() {
    this.movie.actorId=Number(this.route.snapshot.paramMap.get("actorId"));
    this.movie.id=Number(this.route.snapshot.paramMap.get("idMovie"));
    //this.movieService.getMovie(this.movie.id.toString(),this.movie.actorId.toString()).subscribe(e => {
      this.movieService.getMovie(this.movie.id.toString()).subscribe(e => {
      this.movie.name = e.name;
      this.movie.duration = e.duration;
      this.movie.genre = e.genre;  
    });   

  }
  onEdit(){ 
    this.router.navigateByUrl(`/actors/${this.movie.actorId}/movies/${this.movie.id}/edit`);
  }

  onDelete(movie:Movie){

    this.movieService.DeleteMovie(movie).subscribe();
    this.router.navigate([`/movies/${movie.actorId}`])
  .then(() => {
    window.location.reload();
  });
  }

}

