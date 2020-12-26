import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientDisplayComponent } from './recipe-ingredient-display.component';

describe('RecipeIngredientDisplayComponent', () => {
  let component: RecipeIngredientDisplayComponent;
  let fixture: ComponentFixture<RecipeIngredientDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngredientDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
