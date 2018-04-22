import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Adobo', 'Traditional Filipino food.', 
            'https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-.jpg', [
            new Ingredient('Pork', 1),
            new Ingredient('Chicken', 1),
            new Ingredient('Soy sauce', 1),
            new Ingredient('Vinegar', 1)
        ]),
        new Recipe(
            'Sinigang', 'Traditional Filipino food.', 
            'http://www.clker.com/cliparts/0/d/e/5/15137540911469503605filipino-food-sinigang.med.png', [
            new Ingredient('Pork', 1),
            new Ingredient('Sining Mix', 1),
            new Ingredient('Kangkong', 1)
        ]),
        new Recipe('Tinola', 'Traditional Filipino food.', 'http://2.bp.blogspot.com/-1tvAABMErdg/Tlydat-6nAI/AAAAAAAAAZk/igaE0iCtFP8/s400/tinola001.jpg', [
            new Ingredient('Chicken', 1),
            new Ingredient('Papaya', 1)
        ])
    ];

    recipeSelected = new EventEmitter<Recipe>()

    constructor(private slService: ShoppingListService) {

    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    } 

}