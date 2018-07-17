import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaradListComponent } from './carad-list.component';

describe('CaradListComponent', () => {
  let component: CaradListComponent;
  let fixture: ComponentFixture<CaradListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaradListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaradListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
