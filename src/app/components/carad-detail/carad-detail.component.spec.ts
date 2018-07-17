import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaradDetailComponent } from './carad-detail.component';

describe('CaradDetailComponent', () => {
  let component: CaradDetailComponent;
  let fixture: ComponentFixture<CaradDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaradDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaradDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
