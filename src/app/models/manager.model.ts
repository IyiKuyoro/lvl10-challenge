import { Employee, EmployeeType } from './employee.model';
import { IComputeAllocation } from './IComputeAllocation.model';

export class Manager extends Employee implements IComputeAllocation {
  subordinates: {[key: string]: Employee};
  subordinatesLength: number;
  allocationTotal: number;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName, EmployeeType.M, 30000);
    this.subordinates = {};
    this.subordinatesLength = 0;
    this.allocationTotal = 30000;
  }

  addSubordinates(employees: Employee[]): void {
    employees.forEach((employee) => {
      this.subordinates[employee.id] = employee;
      this.subordinatesLength += 1;
      if (employee.employeeType !== EmployeeType.M) {
        this.computeTotalAllocation(employee.allocation);
      }
    });
  }

  removeEmployee(employeeID: string): void {
    const employee = this.subordinates[employeeID];

    if (employee) {
      delete this.subordinates[employeeID];

      if (employee.employeeType !== EmployeeType.M) {
        this.computeTotalAllocation(employee.allocation, false);
      }
      this.subordinatesLength -= 1;
    }
  }

  private computeTotalAllocation(allocation: number, add: boolean = true): void {
    if (add) {
      this.allocationTotal += allocation;
    } else {
      this.allocationTotal -= allocation;
    }
  }

  getTotalAllocation(): number {
    let total = this.allocationTotal;

    for (const id of Object.keys(this.subordinates)) {
      const subordinate: any = this.subordinates[id];

      if (subordinate.employeeType === EmployeeType.M) {
        total += subordinate.getTotalAllocation();
      }
    }

    return total;
  }
}
