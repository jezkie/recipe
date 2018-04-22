import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 3)
    ];

    onIngredientAdded = new EventEmitter<Ingredient[]>();

    addItem(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.onIngredientAdded.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        console.log('adding new ingredients');
        console.table(this.ingredients);
        this.onIngredientAdded.emit(this.ingredients.slice());   
    }
}