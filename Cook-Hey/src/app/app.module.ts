import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { IndexComponent } from './pages/index/index.component';
import { RootComponent } from './pages/root/root.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeIngredientDisplayComponent } from './components/recipe-ingredient-display/recipe-ingredient-display.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    IndexComponent,
    RootComponent,
    IngredientsComponent,
    AddIngredientComponent,
    RecipesComponent,
    RecipeIngredientDisplayComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
