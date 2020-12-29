import {DifficultyEnum} from "../common-services/enums/difficulty.enum";
import {RecipeCategoriesModel} from "./recipe-categories.model";

export interface Recipe {
  id: string;
  title: string;
  author: string;
  difficulty: DifficultyEnum,
  duration: number,


  personNumber: number,
  category: RecipeCategoriesModel,


  ingredients: [Map<string, number>],

  making: [string],
  baking: [string]
}
