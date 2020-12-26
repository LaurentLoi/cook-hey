import {Component, OnInit} from '@angular/core';
import {MeasureUnits} from "../../common/common-services/enums/measure-unit.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormErrorsEnum} from "../../common/common-services/enums/formErrors.enum";
import {IngredientsService} from "../../common/common-services/http-services/ingredients.service";
import {first} from "rxjs/operators";
import {Ingredient} from "../../common/models/ingredient.model";

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {

  measureUnits = MeasureUnits;
  ingredientForm: FormGroup;
  formsErrors = FormErrorsEnum;

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientsService
  ) {
    this.ingredientForm = this.formBuilder.group({
      name: ['', Validators.required],
      measureUnit: ['', ]
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.ingredientForm.valid) {
      console.log(this.ingredientForm.getRawValue());
      const id = 'i' + (((await this.ingredientService.ingredients$.pipe(first()).toPromise()).length) + 1);

      const newIngredient: Ingredient = {
        id: id,
        name: this.ingredientForm.get('name').value,
        measureUnit: this.ingredientForm.get('measureUnit').value
      }
      console.log(newIngredient);
      this.ingredientService.addIngredient(newIngredient);
      this.ingredientForm.reset();
    }
  }

  selectChange() {
    console.log('CHANGE');

  }
}
