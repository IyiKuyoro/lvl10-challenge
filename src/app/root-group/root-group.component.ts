import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../services/allocation.service';
import { EmployeeType } from '../models/employee.model';
import { EmployeeGroup } from '../models/employeeGroup.model';

@Component({
  selector: 'app-root-group',
  templateUrl: './root-group.component.html',
  styleUrls: ['./root-group.component.scss']
})
export class RootGroupComponent implements OnInit {

  constructor(private allocationService: AllocationService) { }

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
}
