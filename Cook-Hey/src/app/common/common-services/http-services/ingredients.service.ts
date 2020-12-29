import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {BehaviorSubject, Observable, of} from "rxjs";
import {tap} from "rxjs/operators";
import {Ingredient} from "../../models/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class IngredientsService {

    private readonly _ingredients$ = new BehaviorSubject<unknown>(null);
    public readonly ingredients$: Observable<Ingredient[]>

    ingredientPickerData: Ingredient[] = [];

    constructor(
        private firestore: AngularFirestore
    ) {
        // LOAD INGREDIENTS COLLECTION - SORTED BY ID
        this.ingredients$ = (firestore.collection<Ingredient>('ingredients').valueChanges()).pipe(
            tap(ingredients => {
                ingredients.sort((a, b) => {
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

    addIngredient(newIngredient: Ingredient) {
        this.firestore.collection('ingredients').doc(newIngredient.id).set(newIngredient).then();
    }


    getByIngredientId(id: string): Observable<Ingredient> {
        (this.firestore.collection<Ingredient>('ingredients').doc(id).ref.get().then(doc => {
            if (doc.exists) {
                console.log('FOUND', doc.data())
                return of(doc.data());
            } else {
                console.log('There is no document with id ');
            }
        }).catch(err => {
            console.log(' in getting doc by id: ' + err);
        }));
        return null;
    }
}
