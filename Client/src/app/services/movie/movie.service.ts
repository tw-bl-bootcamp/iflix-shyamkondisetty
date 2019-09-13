import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpService: HttpService) { }
  getAllmovies() {
    return this.httpService.get('getAllMovies');
  }
}
