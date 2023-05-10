import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";
@Injectable()
export class RecipeService{
  constructor(private shoppingListService: ShoppingListService){

  }
    private recipes: Recipe[] = [new Recipe('A Test Recipe','This is a simple test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    [new Ingredient('Meat',10), new Ingredient('French fries',20)]),
  new Recipe('A Test Recipe 2','This is a simple test 2','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    [new Ingredient('Buns',1), new Ingredient('Meat',2)] )];
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(list: Ingredient[]){
      this.shoppingListService.addIngredients(list);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

}
