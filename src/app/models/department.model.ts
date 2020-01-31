import { EmployeeType } from './employee.model';
import { EmployeeGroup } from './employeeGroup.model';
import { IComputeAllocation } from './IComputeAllocation.model';

export class Department extends EmployeeGroup implements IComputeAllocation {
  name: string;
  allocationTotal: number;

  constructor(name: string) {
    super();

    this.name = name;
    this.allocationTotal = 0;
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
}
