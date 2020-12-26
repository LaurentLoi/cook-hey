import { Component, OnInit } from '@angular/core';
import {UserHttpService} from "../../common/common-services/http-services/user/user-http.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Ingredient} from "../../common/models/ingredient.model";
import {Recipe} from "../../common/models/recipe.model";
import {IngredientsService} from "../../common/common-services/http-services/ingredients.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  users$ = this.userService.users$;
  ingredients: Observable<Ingredient[]>;
  filteredItem: Observable<Recipe[]>;

  recipes: Observable<Recipe[]>;


  constructor(
    private userService: UserHttpService,
    private firestore: AngularFirestore,

  ) {
    // @ts-ignore
    this.ingredients = firestore.collection('ingredients').valueChanges();
    // @ts-ignore
    this.recipes = firestore.collection('recipes').valueChanges();
  }

  ngOnInit(): void {
    console.log(this.recipes);
  }

}
