import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {MeasureUnitEnum} from "./common/common-services/enums/measure-unit.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cook-Hey';
  constructor(firestore: AngularFirestore) {
  }
}
