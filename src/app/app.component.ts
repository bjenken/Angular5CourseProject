import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentNav = "recipes";

  updateNavSelected(nav : string){
    this.currentNav = nav;
    console.log(this.currentNav);
  }
}
