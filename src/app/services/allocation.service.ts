import { Injectable } from '@angular/core';
import { EmployeeGroup } from '../models/employeeGroup.model';

@Injectable({providedIn: 'root'})
export class AllocationService {
  rootGroup: EmployeeGroup;

  constructor() {
  }

  createRoot(root: EmployeeGroup): void {
    this.rootGroup = root;
  }
}
