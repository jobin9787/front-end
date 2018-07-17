import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAppAdComponent } from './submit-app-ad.component';

describe('SubmitAppAdComponent', () => {
  let component: SubmitAppAdComponent;
  let fixture: ComponentFixture<SubmitAppAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAppAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAppAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
