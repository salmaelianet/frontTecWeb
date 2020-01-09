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

  movieId:number;
    
  constructor(private movieService:MovieService, private route: ActivatedRoute, private router :Router) {
    this.movie=new Movie;
   }


  ngOnInit() {
    const movieId=this.route.snapshot.paramMap.get("movieId");
    this.movieService.getMovie(movieId).subscribe(m=>{
      this.movie=m;
      this.movie.id=Number(movieId);
    });
    this.routerSub=this.route.params.subscribe(params => {
      this.movieId=params.movieId;
    });
    
  }
  onEdit(){ 
    this.router.navigateByUrl(`/movie/${this.movie.id}/edit`);
  }

  onDelete(movie:Movie){
    this.movieService.deleteMovie(movie).subscribe();
    
    this.router.navigateByUrl(`/`);

  }
  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

}

