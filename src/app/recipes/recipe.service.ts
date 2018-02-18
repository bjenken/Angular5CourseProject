import { Injectable, EventEmitter, Output } from '@angular/core';

import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is a test 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbWO9U-A6_v_pVeeDYJgmYmXl0RQLafzNs9jYo-df_abwaWm2Xg'),
    new Recipe('A Test Recipe 2', 'This is a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbWO9U-A6_v_pVeeDYJgmYmXl0RQLafzNs9jYo-df_abwaWm2Xg')
  ];
  constructor() { }

  getRecipes(){
    return this.recipes.slice(); //using slice returns a copy, instead of a direct reference
  }

}