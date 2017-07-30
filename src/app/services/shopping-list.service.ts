import { EventEmitter } from "@angular/core";

import { Ingredient } from "app/shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('lentils', 20),
        new Ingredient('tomatoes', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    importIngredients(newIngredients: Ingredient[]) {
        // the spread operator below turns an array into
        // a list of elemnets, i.e. it becomes
        // ingredients.push(ingredient1, ingredient2, ingredient3, etc)
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}