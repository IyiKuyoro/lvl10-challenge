import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeptMangComponent } from './add-dept-mang.component';

describe('AddDeptMangComponent', () => {
  let component: AddDeptMangComponent;
  let fixture: ComponentFixture<AddDeptMangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeptMangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeptMangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
