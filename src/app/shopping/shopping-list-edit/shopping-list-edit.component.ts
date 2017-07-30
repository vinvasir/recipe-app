import { Component, ViewChild, ElementRef } from "@angular/core";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/services/shopping-list.service";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEdit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    onSubmit(event) {
        event.preventDefault();

        let newIngredient = new Ingredient(
            this.nameInput.nativeElement.value, 
            this.amountInput.nativeElement.value
        )

        this.shoppingListService.addIngredient(newIngredient);

        this.nameInput.nativeElement.value = '';
        this.amountInput.nativeElement.value = '';
    }
}