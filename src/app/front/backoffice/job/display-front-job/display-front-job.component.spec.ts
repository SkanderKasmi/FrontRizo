import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFrontJobComponent } from './display-front-job.component';

describe('DisplayFrontJobComponent', () => {
  let component: DisplayFrontJobComponent;
  let fixture: ComponentFixture<DisplayFrontJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFrontJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFrontJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
