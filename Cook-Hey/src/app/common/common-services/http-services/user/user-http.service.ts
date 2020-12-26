import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/user.model";
import {BehaviorSubject, Observable} from "rxjs";
import {filter, first} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private readonly _users$ = new BehaviorSubject<any[]>(null);
  public readonly users$ = this._users$.pipe(
    filter(obj => !! obj)
  );
  item: Observable<any[]>;

  baseUrl = 'https://cook-hey-default-rtdb.europe-west1.firebasedatabase.app/db/users.json';


  constructor(
    private httpClient: HttpClient,
    private firestore: AngularFirestore
  ) {
    this.users$ = firestore.collection('ingredients').valueChanges();
  }

  // async getUser():Promise<void>{
  //   this._users$.next(await this.login().pipe(first()).toPromise());
  // }

  // login(): Observable<User[]> {
  //   return this.httpClient.get<User[]>(this.baseUrl, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  // }
}
//
