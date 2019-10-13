import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivefreeListComponent } from './givefree-list.component';

describe('GivefreeListComponent', () => {
  let component: GivefreeListComponent;
  let fixture: ComponentFixture<GivefreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivefreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivefreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
