import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCarAddComponent } from './submit-car-add.component';

describe('SubmitCarAddComponent', () => {
  let component: SubmitCarAddComponent;
  let fixture: ComponentFixture<SubmitCarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
