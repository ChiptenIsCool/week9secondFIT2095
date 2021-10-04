import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { DeleteMoviesComponent } from './delete-movies/delete-movies.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DeleteBetweenComponent } from './delete-between/delete-between.component';
import { DeleteMovieTitleComponent } from './delete-movie-title/delete-movie-title.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { AddActorToMoviesComponent } from './add-actor-to-movies/add-actor-to-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    AddMoviesComponent,
    DeleteMoviesComponent,
    DeleteBetweenComponent,
    DeleteMovieTitleComponent,
    AddActorComponent,
    AddActorToMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
