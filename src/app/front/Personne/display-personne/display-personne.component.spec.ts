import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPersonneComponent } from './display-personne.component';

describe('DisplayPersonneComponent', () => {
  let component: DisplayPersonneComponent;
  let fixture: ComponentFixture<DisplayPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
