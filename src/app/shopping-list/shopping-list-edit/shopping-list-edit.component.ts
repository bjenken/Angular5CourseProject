import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredients(){
    this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

}
