import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDonationComponent } from './display-donation.component';

describe('DisplayDonationComponent', () => {
  let component: DisplayDonationComponent;
  let fixture: ComponentFixture<DisplayDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
