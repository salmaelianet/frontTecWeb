import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/Movie';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  movie:Movie;
  constructor(private movieService:MovieService,private route:ActivatedRoute,private router:Router) { 
    this.movie=new Movie;
  }
  ngOnInit() {
    const movieId=this.route.snapshot.paramMap.get("movieId");
    this.movieService.getMovie(movieId).subscribe(m=>{
      this.movie=m;
      this.movie.id=Number(movieId);
  })
}
  onSubmit(movie:Movie){
    this.movieService.editMovie(movie).subscribe(m=> {
      this.router.navigateByUrl(`/movies`);
    })
  }

}
