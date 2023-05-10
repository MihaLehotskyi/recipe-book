import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[];

  constructor(private service: RecipeService, private router: Router){

  }
  ngOnInit(): void {
    this.recipes = this.service.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['/recipes','new'])
  }
  
}
