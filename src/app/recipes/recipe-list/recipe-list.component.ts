import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is a test 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbWO9U-A6_v_pVeeDYJgmYmXl0RQLafzNs9jYo-df_abwaWm2Xg'),
    new Recipe('A Test Recipe 2', 'This is a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbWO9U-A6_v_pVeeDYJgmYmXl0RQLafzNs9jYo-df_abwaWm2Xg')
  ];
  constructor() { }

  ngOnInit() {
  }

  // recipeSelected(rec : Recipe){
  //   console.log(rec);
  // }
}
