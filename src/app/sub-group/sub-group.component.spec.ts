import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';

import { SubGroupComponent } from './sub-group.component';
import { Manager } from '../models/manager.model';
import { Department } from '../models/department.model';
import { By } from '@angular/platform-browser';

describe('SubGroupComponent', () => {
  let component: SubGroupComponent;
  let fixture: ComponentFixture<SubGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGroupComponent ],
      imports: [
        FontAwesomeModule,
        MatDialogModule,
      ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(SubGroupComponent);
    component = fixture.componentInstance;
    component.employee = new Manager('John', 'Doe');
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should open add employee modal', () => {
    fixture = TestBed.createComponent(SubGroupComponent);
    component = fixture.componentInstance;
    component.employee = new Manager('John', 'Doe');
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('.add-btn');
    const spy = spyOn(component, 'openModal');

    button.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should remove the only employee', () => {
    fixture = TestBed.createComponent(SubGroupComponent);
    component = fixture.componentInstance;
    const group = new Manager('John', 'Doe');
    const manager = new Manager('James', 'Doe');
    group.addEmployees([manager]);
    component.employee = group;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.remove-btn')).nativeElement;
    const spy = spyOn(component, 'handleRemoveEmployee');

    button.click();

    expect(spy).toHaveBeenCalledWith(group.id);
  });
});
