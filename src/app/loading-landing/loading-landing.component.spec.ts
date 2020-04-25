import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLandingComponent } from './loading-landing.component';

describe('LoadingLandingComponent', () => {
  let component: LoadingLandingComponent;
  let fixture: ComponentFixture<LoadingLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
