import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  actorName: string = ""
  actors: any[] = [];

  constructor(private dbService: DatabaseService) { }

  

  onAddActor(){
    let newItem = {
      name: this.actorName
    }

    this.dbService.createActor(newItem).subscribe((data: any)=>{
      console.log(data);  
    })
  }
  ngOnInit(): void {
    this.dbService.getActors().subscribe((data: any)=>{
      console.log(data)
      this.actors=data;
    })
  }

}
