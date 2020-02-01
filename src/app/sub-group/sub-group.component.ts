import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

import { IEmployee, EmployeeType } from '../models/employee.model';
import { Manager } from '../models/manager.model';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';

@Component({
  selector: '[app-sub-group]',
  templateUrl: './sub-group.component.html',
  styleUrls: ['./sub-group.component.scss']
})
export class SubGroupComponent implements OnInit {
  plus = faPlus;
  minus = faMinus;
  @Input() employee: IEmployee | Manager | any;
  @Input() isRootManager: boolean;
  @Output() removeEmployee = new EventEmitter();
  private el: HTMLElement;

  constructor(
    elRef: ElementRef,
    public dialog: MatDialog,
  ) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddEmployeeModalComponent, {
      width: '90%',
      maxWidth: '650px',
      data: {
        rootSave: false,
        manager: this.employee,
      },
    });
  }

  handleRemoveEmployee(id: number): void {
    this.removeEmployee.emit(id.toString());
  }

  removeSubordinate(id: string): void {
    if (this.employee.employeeType === EmployeeType.M) {
      this.employee.removeEmployee(parseInt(id));
    }
  }
}
