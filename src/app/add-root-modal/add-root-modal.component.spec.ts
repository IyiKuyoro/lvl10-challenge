import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRootModalComponent } from './add-root-modal.component';

describe('AddRootModalComponent', () => {
  let component: AddRootModalComponent;
  let fixture: ComponentFixture<AddRootModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRootModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRootModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
