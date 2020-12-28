import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login/login.component";
import {RootComponent} from "./pages/root/root.component";
import {IndexComponent} from "./pages/index/index.component";
import {IngredientsComponent} from "./pages/ingredients/ingredients.component";
import {RecipesComponent} from "./pages/recipes/recipes.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'ingredients',
        component: IngredientsComponent
      },
      {
        path: 'recipes',
        component: RecipesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
