import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../common/common-services/http-services/recipes.service";
import {Difficulty} from "../../common/common-services/enums/difficulty.enum";

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
