import {Difficulty} from "../common-services/enums/difficulty.enum";
import {Ingredient} from "./ingredient.model";

export interface Recipe {
  id: string;
  title: string;
  author: string;
  difficulty: Difficulty,
  duration: number,
  ingredients: [Map<string, number>],
  instructions: [string]
}

export interface ig{
  name: string,
  quantity: number
}
