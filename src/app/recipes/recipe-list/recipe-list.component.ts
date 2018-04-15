import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Adobo', 'Traditional Filipino food.', 'https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-.jpg'),
    new Recipe('Sinigang', 'Traditional Filipino food.', 'http://www.clker.com/cliparts/0/d/e/5/15137540911469503605filipino-food-sinigang.med.png'),
    new Recipe('Tinola', 'Traditional Filipino food.', 'http://2.bp.blogspot.com/-1tvAABMErdg/Tlydat-6nAI/AAAAAAAAAZk/igaE0iCtFP8/s400/tinola001.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
