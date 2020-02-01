import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { AllocationService } from '../services/allocation.service';
import { Department } from '../models/department.model';
import { Manager } from '../models/manager.model';

@Component({
  selector: 'app-add-root-modal',
  templateUrl: './add-root-modal.component.html',
  styleUrls: ['./add-root-modal.component.scss']
})
export class AddRootModalComponent implements OnInit {
  rootType: 'Manager' | 'Department';
  departmentForm: FormGroup;
  managerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddRootModalComponent>,
    private allocationService: AllocationService,
  ) {
    const firstName = new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z'-]+$/)]);
    const lastName = new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z'-]+$/)]);
    this.managerForm = new FormGroup({
      firstName,
      lastName,
    });

    const departmentName = new FormControl(null, [Validators.required, Validators.pattern(/^[^&)(\]\[\(\)\{\}+^%#!±?>~<]+$/)]);
    this.departmentForm = new FormGroup({
      departmentName,
    });
  }

  ngOnInit() {
    this.rootType = 'Manager';
  }

  switchRootType(): void {
    if (this.rootType === 'Manager') {
      this.rootType = 'Department';
    } else {
      this.rootType = 'Manager';
    }
  }

  isDepartmentNameValid(): boolean {
    return this.departmentForm.controls.departmentName.invalid && this.departmentForm.controls.departmentName.touched;
  }

  isFirstNameValid(): boolean {
    return this.managerForm.controls.firstName.invalid && this.managerForm.controls.firstName.touched;
  }

  isLastNameValid(): boolean {
    return this.managerForm.controls.lastName.invalid && this.managerForm.controls.lastName.touched;
  }

  createRootDepartment(): void {
    const department = new Department(
      this.departmentForm.controls.departmentName.value,
    );

    this.allocationService.createRoot(department);
    this.closeDialog();
  }

  createRootManager(): void {
    const manager = new Manager(
      this.managerForm.controls.firstName.value,
      this.managerForm.controls.lastName.value,
    );

    this.allocationService.createRoot(manager);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
