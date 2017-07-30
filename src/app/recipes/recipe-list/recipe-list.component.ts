import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeList implements OnInit {
    recipeItems: Recipe[];

    constructor(private recipeService: RecipeService) {} 

    ngOnInit() {
        this.recipeItems = this.recipeService.getRecipes();
    }
}