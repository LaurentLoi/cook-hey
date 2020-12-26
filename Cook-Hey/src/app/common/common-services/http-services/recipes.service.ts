import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Ingredient} from "../../models/ingredient.model";
import {AngularFirestore} from "@angular/fire/firestore";
import {tap} from "rxjs/operators";
import {Recipe} from "../../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private readonly _recipes$ = new BehaviorSubject<unknown>(null);
  public readonly recipes$: Observable<Recipe[]>

  constructor(
    private firestore: AngularFirestore,
  ) {
    // LOAD INGREDIENTS COLLECTION - SORTED BY ID
    // @ts-ignore
    this.recipes$ = (firestore.collection('recipes').valueChanges()).pipe(
      tap(recipes => {
        recipes.sort((a, b) => {
          // @ts-ignore
          if (a.id > b.id) {
            return 1;
          }
          // @ts-ignore
          if (a.id < b.id) {
            return -1;
          }
          return 0;
        })
      })
    );
  }

  addRecipe(newRecipe: Recipe) {
    this.firestore.collection('recipes').add(newRecipe).then();
  }

}
