import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RootGroupComponent } from './root-group.component';
import { SubGroupComponent } from '../sub-group/sub-group.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AllocationService } from '../services/allocation.service';
import { Manager } from '../models/manager.model';

describe('RootGroupComponent', () => {
  let component: RootGroupComponent;
  let fixture: ComponentFixture<RootGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootGroupComponent,
        SubGroupComponent,
      ],
      imports: [
        FontAwesomeModule,
        MatDialogModule,
      ],
      providers: [
        {
          provide: AllocationService,
          useValue: {
            rootGroup: new Manager('John', 'Doe'),
          }
        }
      ]
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
