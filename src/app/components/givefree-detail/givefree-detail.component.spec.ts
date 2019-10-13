import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivefreeDetailComponent } from './givefree-detail.component';

describe('GivefreeDetailComponent', () => {
  let component: GivefreeDetailComponent;
  let fixture: ComponentFixture<GivefreeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivefreeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivefreeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
