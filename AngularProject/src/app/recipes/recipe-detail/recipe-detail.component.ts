import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe : Recipe;
  id : number;
  constructor(private service: RecipeService, private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this.service.getRecipe(this.id);
    })

  }

  onRecipeEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }


  onClick(){
      this.service.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
