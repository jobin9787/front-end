import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppadDetailComponent } from './appad-detail.component';

describe('AppadDetailComponent', () => {
  let component: AppadDetailComponent;
  let fixture: ComponentFixture<AppadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
