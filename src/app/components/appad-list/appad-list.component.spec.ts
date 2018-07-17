import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppadListComponent } from './appad-list.component';

describe('AppadListComponent', () => {
  let component: AppadListComponent;
  let fixture: ComponentFixture<AppadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
