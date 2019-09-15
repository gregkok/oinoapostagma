import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientGridComponent } from './ingredient-grid.component';

describe('IngredientGridComponent', () => {
  let component: IngredientGridComponent;
  let fixture: ComponentFixture<IngredientGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
