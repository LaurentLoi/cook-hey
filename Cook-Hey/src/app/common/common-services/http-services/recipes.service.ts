import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {tap} from "rxjs/operators";
import {Recipe} from "../../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  //private readonly _recipes$ = new BehaviorSubject<unknown>(null);
  public readonly recipes$: Observable<Recipe[]>

  constructor(
    private firestore: AngularFirestore,
  ) {

    // LOAD INGREDIENTS COLLECTION - SORTED BY ID
    this.recipes$ = (firestore.collection<Recipe>('recipes').valueChanges()).pipe(
      tap(recipes => {
        recipes.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          }
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
