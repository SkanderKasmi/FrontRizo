import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySkillComponent } from './display-skill.component';

describe('DisplaySkillComponent', () => {
  let component: DisplaySkillComponent;
  let fixture: ComponentFixture<DisplaySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
