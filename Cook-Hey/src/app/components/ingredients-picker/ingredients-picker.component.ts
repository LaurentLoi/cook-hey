import {Component, Input, OnInit} from '@angular/core';
import {IngredientsService} from "../../common/common-services/http-services/ingredients.service";
import {Observable} from "rxjs";
import {Ingredient} from "../../common/models/ingredient.model";

@Component({
    selector: 'app-ingredients-picker',
    templateUrl: './ingredients-picker.component.html',
    styleUrls: ['./ingredients-picker.component.scss']
})
export class IngredientsPickerComponent implements OnInit {

    ingredients$: Observable<Ingredient[]>
    selectedIngredients: Ingredient[] = [];

    constructor(
        private ingredientService: IngredientsService
    ) {
    }

    ngOnInit(): void {
        this.ingredients$ = this.ingredientService.ingredients$;
    }

    addIngredient(ingredient: Ingredient) {
        if (this.selectedIngredients.indexOf(ingredient) === -1) {
            this.selectedIngredients.push(ingredient);
        }
    }

    removeIngredient(ingredient: Ingredient) {
        this.selectedIngredients.splice(this.selectedIngredients.indexOf(ingredient), 1);
    }

    private saveChanges() {
        this.ingredientService.ingredientPickerData = this.selectedIngredients;
    }
}
