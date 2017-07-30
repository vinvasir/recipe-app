import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipes/recipes/recipe.model";
import { ShoppingListService } from "app/services/shopping-list.service";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.recipe = this.recipeService.getRecipes()[params.id]
    )
  }

  addToList() {
    this.shoppingListService.importIngredients(this.recipe.ingredients);
  }

}
