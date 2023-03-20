import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import{Movie} from '../model/movie'

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  getLatestMovie(): Observable<any>{
    return this.http.get<any>(this.url + '/movie/latest?api_key=ed7d9fb9383cb1040ee89f4f8146793b');
  }

  getPopularMovies(): Observable<Movie>{
    return this.http.get<Movie>(this.url + '/movie/popular?api_key=ed7d9fb9383cb1040ee89f4f8146793b')
  }

  getNowPlayingMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/movie/now_playing?api_key=ed7d9fb9383cb1040ee89f4f8146793b')
  }

  getTopRatedMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/movie/top_rated?api_key=ed7d9fb9383cb1040ee89f4f8146793b')
  }

  getUpcommingMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/movie/upcomming?api_key=ed7d9fb9383cb1040ee89f4f8146793b')
  }

  getTrendingMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/trending/all/week?api_key=ed7d9fb9383cb1040ee89f4f8146793b')
  }

  getOrginals(): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/discover/tv?api_key=ed7d9fb9383cb1040ee89f4f8146793b')
  }

}
