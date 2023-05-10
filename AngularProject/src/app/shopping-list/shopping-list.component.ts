import {Component, OnDestroy, OnInit} from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients = []
  private subscription : Subscription
  constructor(private service : ShoppingListService){
  }
  ngOnInit(): void {
    this.ingredients = this.service.getIngredients();
    this.subscription = this.service.ingredientsChanged
                        .subscribe(list => this.ingredients = list);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
