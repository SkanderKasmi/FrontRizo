import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FrontListComponent} from "./front-list.component";


describe('TopicsListComponent', () => {
  let component: FrontListComponent;
  let fixture: ComponentFixture<FrontListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontListComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
