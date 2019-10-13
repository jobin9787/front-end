import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFreeAddComponent } from './submit-free-add.component';

describe('SubmitFreeAddComponent', () => {
  let component: SubmitFreeAddComponent;
  let fixture: ComponentFixture<SubmitFreeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFreeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFreeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
