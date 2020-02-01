import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Developer } from '../models/developer.model';
import { QATester } from '../models/qatester.model';
import { Manager } from '../models/manager.model';
import { AllocationService } from '../services/allocation.service';
import { AddRootModalComponent } from '../add-root-modal/add-root-modal.component';
import { IEmployee } from '../models/employee.model';

interface DialogData {
  rootSave: boolean;
  saveLocation: number;
}

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.sass']
})
export class AddEmployeeModalComponent implements OnInit {
  employeeTypes =  ['Developer', 'Manager', 'QATester'];
  employeeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddRootModalComponent>,
    private allocationService: AllocationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    const firstName = new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z'-]+$/)]);
    const lastName = new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z'-]+$/)]);
    const employeeType = new FormControl('Developer', [Validators.required]);
    this.employeeForm = new FormGroup({
      firstName,
      lastName,
      employeeType,
    });
  }

  ngOnInit() {
  }

  createEmployee(): void {
    let employee: IEmployee;

    switch (this.employeeForm.controls.employeeType.value) {
      case 'Manager':
        employee = new Manager(
          this.employeeForm.controls.firstName.value,
          this.employeeForm.controls.lastName.value,
        );
        break;
      case 'QATester':
        employee = new QATester(
          this.employeeForm.controls.firstName.value,
          this.employeeForm.controls.lastName.value,
        );
        break;
      default:
        employee = new Developer(
          this.employeeForm.controls.firstName.value,
          this.employeeForm.controls.lastName.value,
        );
        break;
    }

    this.saveEmployee(employee);
  }

  saveEmployee(employee: IEmployee): void {
    if (this.data.rootSave) {
      this.allocationService.rootGroup.addEmployees([employee]);
    } else {
      // Todo
    }
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  isFirstNameValid(): boolean {
    return this.employeeForm.controls.firstName.invalid && this.employeeForm.controls.firstName.touched;
  }

  isLastNameValid(): boolean {
    return this.employeeForm.controls.lastName.invalid && this.employeeForm.controls.lastName.touched;
  }
}
