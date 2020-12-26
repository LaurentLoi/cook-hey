import { Component, OnInit } from '@angular/core';
import {IngredientsService} from "../../common/common-services/http-services/ingredients.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients$ = this.ingredientsService.ingredients$;

  constructor(
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit(): void {
  }

  resetModal() {

  }
}
