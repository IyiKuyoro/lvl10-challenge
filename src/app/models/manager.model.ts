import { uniqid } from './__helpers__/uniqid';
import { IEmployee, EmployeeType, EmployeeAllocation } from './employee.model';
import { IComputeAllocation } from './IComputeAllocation.model';
import { EmployeeGroup } from './employeeGroup.model';

export class Manager extends EmployeeGroup implements IEmployee, IComputeAllocation {
  id: string;
  firstName: string;
  lastName: string;
  employeeType: EmployeeType;
  allocation: number;
  allocationTotal: number;

  constructor(firstName: string, lastName: string) {
    super();

    this.id = uniqid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeType = EmployeeType.M;
    this.allocation = EmployeeAllocation.M;
    this.allocationTotal = this.allocation;
  }

  computeTotalAllocation(allocation: number, add: boolean = true): void {
    if (add) {
      this.allocationTotal += allocation;
    } else {
      this.allocationTotal -= allocation;
    }
  }

  getTotalAllocation(): number {
    let total = this.allocationTotal;

    for (const id of Object.keys(this.employees)) {
      const subordinate: any = this.employees[id];

      if (subordinate.employeeType === EmployeeType.M) {
        total += subordinate.getTotalAllocation();
      }
    }

    return total;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
