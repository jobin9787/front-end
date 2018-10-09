import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaradSearchComponent } from './carad-search.component';

describe('CaradSearchComponent', () => {
  let component: CaradSearchComponent;
  let fixture: ComponentFixture<CaradSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaradSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaradSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
