import {Difficulty} from "../common-services/enums/difficulty.enum";
import {RecipesCategoriesEnum} from "../common-services/enums/recipes-categories.enum";

export interface Recipe {
  id: string;
  title: string;
  author: string;
  difficulty: Difficulty,
  duration: number,


  personNumber: number,
  category: RecipesCategoriesEnum,


  ingredients: [Map<string, number>],

  making: [string],
  baking: [string]
}
