import {Subject} from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>;
    private ingredients: Ingredient[] = [new Ingredient('Apple',10),new Ingredient('Peach',80)];

    getIngredients(){
       return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredient: Ingredient[]){
        this.ingredients.push.apply(this.ingredients,ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
