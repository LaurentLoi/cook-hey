import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../common/common-services/http-services/recipes.service";
import {RecipeCategoriesModel} from "../../common/models/recipe-categories.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes$ = this.recipesService.recipes$;
  recipeCategories: RecipeCategoriesModel;

  constructor(
    private recipesService: RecipesService,
  ) {
  }

  ngOnInit(): void {
  }

  // todo: get it work to display a real string
  getRecipeCategory(name: string): string {
    switch (name) {
      case 'aperitif':
        return this.recipeCategories.aperitif;
      case 'starter':
        return this.recipeCategories.starter;
      case 'mainCourse':
        return this.recipeCategories.mainCourse;
      case 'accompaniment':
        return this.recipeCategories.accompaniment;
      case 'dessert':
        return this.recipeCategories.dessert;
    }
  }
}
