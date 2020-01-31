import { Employee, EmployeeType } from './employee.model';
import { IComputeAllocation } from './IComputeAllocation.model';

export class Department implements IComputeAllocation {
  name: string;
  employees: {[key: string]: Employee};
  employeeLength: number;
  allocationTotal: number;

  constructor(name: string) {
    this.name = name;
    this.employees = {};
    this.employeeLength = 0;
    this.allocationTotal = 0;
  }

  addEmployees(employees: Employee[]): void {
    employees.forEach(employee => {
      this.employees[employee.id] = employee;
      this.employeeLength += 1;
      if (employee.employeeType !== EmployeeType.M) {
        this.computeTotalAllocation(employee.allocation);
      }
    });
  }

  removeEmployee(employeeID: string): void {
    const employee = this.employees[employeeID];

    if (employee) {
      delete this.employees[employeeID];

      if (employee.employeeType !== EmployeeType.M) {
        this.computeTotalAllocation(employee.allocation, false);
      }
      this.employeeLength -= 1;
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

    for (const id of Object.keys(this.employees)) {
      const subordinate: any = this.employees[id];

      if (subordinate.employeeType === EmployeeType.M) {
        total += subordinate.getTotalAllocation();
      }
    }

    return total;
  }
}
