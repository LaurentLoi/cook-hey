import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Ingredient} from "../../common/models/ingredient.model";
import {AngularFirestore} from "@angular/fire/firestore";
import {filter, first} from "rxjs/operators";
import {IngredientsService} from "../../common/common-services/http-services/ingredients.service";

@Component({
  selector: 'app-recipe-ingredient-display',
  templateUrl: './recipe-ingredient-display.component.html',
  styleUrls: ['./recipe-ingredient-display.component.scss']
})
export class RecipeIngredientDisplayComponent implements OnInit {

  @Input() ingredient: Map<string, number>;

  private readonly _ingredient$ = new BehaviorSubject<unknown>(null);
  public readonly ingredient$ = this._ingredient$.pipe(
    filter(ingredient => !!ingredient)
  );

  constructor(
    private firestore: AngularFirestore,
  ) {

  }

  ngOnInit(): void {
    this.firestore.collection<Ingredient>('ingredients').doc(this.ingredient['name']).ref.get().then(doc => {
      if (doc.exists){
        this._ingredient$.next(doc.data());
      } else {
        console.log('There is no document with id ');
      }
    }).catch(err => {
      console.log(' in getting doc by id: ' + err);
    });
  }

}
