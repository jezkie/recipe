import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Adobo', 'Traditional Filipino food.', 'https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-.jpg'),
        new Recipe('Sinigang', 'Traditional Filipino food.', 'http://www.clker.com/cliparts/0/d/e/5/15137540911469503605filipino-food-sinigang.med.png'),
        new Recipe('Tinola', 'Traditional Filipino food.', 'http://2.bp.blogspot.com/-1tvAABMErdg/Tlydat-6nAI/AAAAAAAAAZk/igaE0iCtFP8/s400/tinola001.jpg')
    ];

    recipeSelected = new EventEmitter<Recipe>()

    getRecipes() {
        return this.recipes.slice();
    }

}