import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFrontFormationComponent } from './display-front-formation.component';

describe('DisplayFrontFormationComponent', () => {
  let component: DisplayFrontFormationComponent;
  let fixture: ComponentFixture<DisplayFrontFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFrontFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFrontFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
