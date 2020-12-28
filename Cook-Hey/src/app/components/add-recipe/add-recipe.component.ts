import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormErrorsEnum} from "../../common/common-services/enums/formErrors.enum";
import {IngredientsService} from "../../common/common-services/http-services/ingredients.service";
import {first} from "rxjs/operators";
import {Ingredient} from "../../common/models/ingredient.model";
import {RecipesCategories} from "../../common/common-services/enums/recipes-categories.enum";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  categories = RecipesCategories;
  recipeForm: FormGroup;
  formsErrors = FormErrorsEnum;

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientsService
  ) {
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      measureUnit: ['', ]
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.getRawValue());
      const id = 'i' + (((await this.ingredientService.ingredients$.pipe(first()).toPromise()).length) + 1);

      const newIngredient: Ingredient = {
        id: id,
        name: this.recipeForm.get('name').value,
        measureUnit: this.recipeForm.get('measureUnit').value
      }
      console.log(newIngredient);
      this.ingredientService.addIngredient(newIngredient);
      this.recipeForm.reset();
    }
  }

  selectChange() {
    console.log('CHANGE');

  }

}
