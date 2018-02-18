import { Component, OnInit } from '@angular/core';

import {Recipe} from './recipe.model';

import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  currRecipe : Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.currRecipe = recipe;
        }
      );
  }

  updateRecipe(rec : Recipe){
    this.currRecipe = rec;
    console.log(rec);
  }


}
