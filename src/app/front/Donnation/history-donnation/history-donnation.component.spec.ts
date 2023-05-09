import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDonnationComponent } from './history-donnation.component';

describe('HistoryDonnationComponent', () => {
  let component: HistoryDonnationComponent;
  let fixture: ComponentFixture<HistoryDonnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDonnationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDonnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
