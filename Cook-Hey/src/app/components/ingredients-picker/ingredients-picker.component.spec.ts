import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsPickerComponent } from './ingredients-picker.component';

describe('IngredientsPickerComponent', () => {
  let component: IngredientsPickerComponent;
  let fixture: ComponentFixture<IngredientsPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
