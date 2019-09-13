import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  movies: any[];
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getAllmovies().subscribe(
      (response:any) => {
        this.movies=response.data;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

}
