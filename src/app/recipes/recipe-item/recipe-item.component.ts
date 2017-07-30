import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipes/recipes/recipe.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItem implements OnInit {
  @Input() item: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  
}
