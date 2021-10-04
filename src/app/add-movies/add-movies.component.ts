import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  movieTitle: string = "";
  movieYear:number = 0;

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
  }

  onSaveMovie(){
    let newItem = {
      title: this.movieTitle,
      year: this.movieYear
    }

    this.dbService.createMovie(newItem).subscribe((data: any)=>{
      console.log(data);  
    })
  }

}
