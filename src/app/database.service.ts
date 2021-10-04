import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  result: any;
  getMovies() {
    return this.http.get("/movies");
  }
/*   getMovie(id: string) {
    let url = "/movies/" + id;
    return this.http.get(url);
  } */
  createMovie(data: any) {
    return this.http.post("/movies", data, httpOptions);
  }
  deleteMovie(id: string) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }
  deleteMovieBetween(year1:number, year2:number){
    let url = "/movies/deletebetween/" + year1+"/"+year2;
    return this.http.delete(url, httpOptions);
    
  }
  deleteMovieByTitle(title:string){
    let url = "/movies/deletebytitle/" + title;
    return this.http.delete(url, httpOptions);
  }

  createActor(data: any) {
    return this.http.post("/actors", data, httpOptions);
  }
  getActors() {
    return this.http.get("/actors");
  }

  putActorIntoMovie(id: string, data:any){
    let url = "/movies/" + id +"/actors";
    return this.http.post(url, data, httpOptions);

  }

  
}