import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navBarSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  recipesSelected(){
    this.navBarSelected.emit("recipes");
  }

  shoppingSelected(){
    this.navBarSelected.emit("shopping");
  }
}
