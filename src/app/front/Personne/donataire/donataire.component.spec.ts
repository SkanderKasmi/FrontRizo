import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonataireComponent } from './donataire.component';

describe('DonataireComponent', () => {
  let component: DonataireComponent;
  let fixture: ComponentFixture<DonataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
