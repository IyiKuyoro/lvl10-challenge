import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-root-modal',
  templateUrl: './add-root-modal.component.html',
  styleUrls: ['./add-root-modal.component.scss']
})
export class AddRootModalComponent implements OnInit {
  rootType: 'Manager' | 'Department';
  departmentForm: FormGroup;
  managerForm: FormGroup;

  constructor() {
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
}
