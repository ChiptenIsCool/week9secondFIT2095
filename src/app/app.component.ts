import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week9labs';
  section: number = 1;
  changeSection(sectionId: number){
    this.section = sectionId;
  }
}
