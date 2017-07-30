import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "app/recipes/recipes/recipes.component";
import { ShoppingListComponent } from "app/shopping/shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { SelectRecipe } from "app/recipes/select-recipe/select-recipe.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: SelectRecipe },
      { path: ':id', component: RecipeDetailComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}