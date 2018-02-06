import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbWO9U-A6_v_pVeeDYJgmYmXl0RQLafzNs9jYo-df_abwaWm2Xg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbWO9U-A6_v_pVeeDYJgmYmXl0RQLafzNs9jYo-df_abwaWm2Xg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
