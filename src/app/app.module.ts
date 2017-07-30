import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipeList } from './recipes/recipe-list/recipe-list.component';
import { RecipeItem } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEdit } from "app/shopping/shopping-list-edit/shopping-list-edit.component";
import { RecipesComponent } from './recipes/recipes/recipes.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from "app/app-routing.module";
import { SelectRecipe } from "app/recipes/select-recipe/select-recipe.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeList,
    RecipeItem,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEdit,
    RecipesComponent,
    DropdownDirective,
    SelectRecipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
