import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormErrorsEnum} from "../../common/common-services/enums/formErrors.enum";
import {RecipesService} from "../../common/common-services/http-services/recipes.service";
import {first} from "rxjs/operators";
import {RecipesCategories} from "../../common/common-services/enums/recipes-categories.enum";
import {Recipe} from "../../common/models/recipe.model";
import {Difficulty} from "../../common/common-services/enums/difficulty.enum";
import {IngredientsService} from "../../common/common-services/http-services/ingredients.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  categories = RecipesCategories;
  difficulty = Difficulty;
  recipeForm: FormGroup;
  formsErrors = FormErrorsEnum;

  ingredients$ = this.ingredientService.ingredients$;

  constructor(
    private formBuilder: FormBuilder,
    private recipesService: RecipesService,
    private ingredientService: IngredientsService
  ) {
    this.recipeForm = this.formBuilder.group({
      title: ['', /*Validators.required*/],
      author: ['', /*Validators.required*/],
      category: ['', /*Validators.required*/],
      duration: [0, /*Validators.required, Validators.min(1)*/],
      difficulty: ['', /*Validators.required*/],
      personNumber: ['', /*Validators.required, Validators.min(1)*/],
      ingredients: ['', /*Validators.required*/],
      making: ['', /*Validators.required*/],
      baking: ['', /*Validators.required*/],

    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.getRawValue());
      const id = 'r' + (((await this.recipesService.recipes$.pipe(first()).toPromise()).length) + 1);
      //let values = [['name', ''], ['quantity', 0]]
      let myMap = [];
      myMap.push(new Map());
      myMap[0].set('name', '');
      myMap[0].set('quantity', 0);
      console.log(myMap);
      const newRecipe: Recipe = {
        id: id,
        title: this.recipeForm.get('title').value,
        author: this.recipeForm.get('author').value,
        category: this.recipeForm.get('category').value,
        duration: this.recipeForm.get('duration').value,
        difficulty: this.recipeForm.get('difficulty').value,
        personNumber: this.recipeForm.get('personNumber').value,


        ingredients: this.recipeForm.get('ingredients').value,
        making: this.recipeForm.get('making').value,
        baking: this.recipeForm.get('baking').value,
        //
        //   // ingredients: this.recipeForm.get('ingredients').value,
        //   // making: this.recipeForm.get('making').value,
        //   // baking: this.recipeForm.get('baking').value,
      }
      console.log(newRecipe);
      // //this.recipesService.addRecipe(newRecipe);
      this.recipeForm.reset();
    }
  }

  selectChange() {
    console.log('CHANGE');

  }

}
