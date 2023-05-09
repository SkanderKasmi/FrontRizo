import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcrudComponent } from './eventcrud.component';

describe('EventcrudComponent', () => {
  let component: EventcrudComponent;
  let fixture: ComponentFixture<EventcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
