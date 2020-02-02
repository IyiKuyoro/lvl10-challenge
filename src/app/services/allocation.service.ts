import { Injectable } from '@angular/core';

import { Department } from '../models/department.model';
import { Manager } from '../models/manager.model';

@Injectable({providedIn: 'root'})
export class AllocationService {
  rootGroup: Manager | Department;
  rootGroupType: string;

  constructor() {
  }

  createRoot(root: Manager | Department): void {
    this.rootGroup = root;

    if (this.rootGroup.hasOwnProperty('employeeType')) {
      this.rootGroupType = 'manager';
    } else {
      this.rootGroupType = 'department';
    }
  }

  removeSubordinate(id: string): void {
    this.rootGroup.removeEmployee(id);
  }
}
