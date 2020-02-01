import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootGroupComponent } from './root-group.component';

describe('RootGroupComponent', () => {
  let component: RootGroupComponent;
  let fixture: ComponentFixture<RootGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
