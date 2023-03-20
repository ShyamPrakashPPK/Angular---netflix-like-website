import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie'
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  latestMovie: any;
  popularMovies!: Movie;
  nowPlayingMovies!: Movie;
  topRatedMovies!: Movie;
  upComingMovie!: Movie;
  trendingMovies!: Movie;
  orginals!: Movie;
  videolink!: string;
  isVideo: boolean = false;


  constructor(private dataService: DataService) { }

  ngOnInit(): void{
    this.getLatestMovie();
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
    // this.getUpcommingMovies();
    this.getTrendingMovies();
    this.getOrginals();
  }


  getLatestMovie() {
    this.dataService.getLatestMovie().subscribe(res => {
      this.latestMovie = this.changeData(res);
      console.log(this.latestMovie);
      
    }, err => {
      console.log('Not able to get the latest movie',err);
    })
  }

  changeData(res: any): any{
   
    res.backdrop_path = 'https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg?api_key= =ed7d9fb9383cb1040ee89f4f8146793b';
     
    return res;
  }

  getPopularMovies() {
    this.dataService.getPopularMovies().subscribe(res => {
      this.popularMovies = this.modifyData(res);
      console.log(this.popularMovies);
      
    }, err => {
      console.log('Not able to get the popular movie', err);
    })
  }

  getNowPlayingMovies() {
    this.dataService.getNowPlayingMovies().subscribe(res => {
      this.nowPlayingMovies = this.modifyData(res);
    }, err => {
      console.log('Not able to get the popular movie', err);
    })
  }

  getTopRatedMovies() {
    this.dataService.getTopRatedMovies().subscribe(res => {
      this.topRatedMovies = this.modifyData(res);
    }, err => {
      console.log('Not able to get the popular movie', err);
    })
  }

  // getUpcommingMovies() {
  //   this.dataService.getUpcommingMovies().subscribe(res => {
  //     this.upComingMovie = this.modifyData(res);
  //   }, err => {
  //     console.log('Not able to get the popular movie', err);
  //   })
  // }  

  getTrendingMovies() {
    this.dataService.getTrendingMovies().subscribe(res => {
      this.trendingMovies = this.modifyData(res);
    }, err => {
      console.log('Not able to get the popular movie', err);
    })
  }  

  getOrginals() {
    this.dataService.getOrginals().subscribe(res => {
      this.orginals = this.modifyData(res);
    }, err => {
      console.log('Not able to get the popular movie', err);
    })
  }  


  modifyData(movies: Movie):Movie {
    if (movies.results) {
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original' + element.backdrop_path + '?api_key=ed7d9fb9383cb1040ee89f4f8146793b';
        if (!element.title) {
          element.title = element?.name;
        }
      })
    }
    return movies;
  }

  clickOnPm(movie: any) {
    this.isVideo = true;
    this.videolink = 'https://www.youtube.com/watch?v=eX2qFMC8cFo';
  }

}
