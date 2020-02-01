import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

import { AllocationService } from '../services/allocation.service';
import { EmployeeType } from '../models/employee.model';
import { EmployeeGroup } from '../models/employeeGroup.model';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';

@Component({
  selector: 'app-root-group',
  templateUrl: './root-group.component.html',
  styleUrls: ['./root-group.component.scss']
})
export class RootGroupComponent implements OnInit {
  plus = faPlus;

  constructor(
    private allocationService: AllocationService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  getRootGroupName(): string {
    return this.allocationService.rootGroup.getName();
  }

  isRootGroupManager(): boolean {
    const group: any = this.allocationService.rootGroup;

    if (group.employeeType && group.employeeType === EmployeeType.M) {
      return true;
    }

    return false;
  }

  getRootGroup(): EmployeeGroup {
    return this.allocationService.rootGroup;
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddEmployeeModalComponent, {
      width: '90%',
      maxWidth: '650px',
      data: {
        rootSave: true,
      },
    });
  }
}
