import { EventEmitter, Output } from "@angular/core";

import { Recipe } from "app/recipes/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipeItems: Recipe[] = [
        new Recipe(
            'lentil soup', 
            'super staple food', 
            'http://media3.sailusfood.com/wp-content/uploads/2010/10/tomato-dal.jpg',
            [new Ingredient('tomatoes', 4), new Ingredient('lentils', 25)]
        ),
        new Recipe(
            'colorful pasta',
            'that cool Trader Joes Pasta that takes a while to boil',
            'http://2.bp.blogspot.com/-oECpnRtLO94/Ub-1Qut6OGI/AAAAAAAABlU/08aHTJxaZOA/s1600/Pasta+.png',
            [new Ingredient("trader joe's pasta", 1), new Ingredient("trader joe's marinara sauce", 1)]
        )
    ];

    getRecipes() {
        // get a new array rather than a reference to the original
        return this.recipeItems.slice();
    }
}