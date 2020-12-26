import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../common/common-services/http-services/recipes.service";
import {AngularFirestore, DocumentSnapshot} from "@angular/fire/firestore";
import {Ingredient} from "../../common/models/ingredient.model";
import {Observable, of, pipe} from "rxjs";
import {find, first, map, tap} from "rxjs/operators";
import {IngredientsService} from "../../common/common-services/http-services/ingredients.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes$ = this.recipesService.recipes$;

  constructor(
    private recipesService: RecipesService,
  ) {
  }

  async ngOnInit(): Promise<void> {
  }
}
