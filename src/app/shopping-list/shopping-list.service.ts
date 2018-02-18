import { Injectable, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Injectable()
export class ShoppingListService {
  @Output() shoppingListUpdated = new EventEmitter();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Bananas", 10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.shoppingListUpdated.emit();
  }

}
