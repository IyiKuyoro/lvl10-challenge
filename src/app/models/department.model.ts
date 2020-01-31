import { Employee } from './employee.model';
import { IComputeAllocation } from './IComputeAllocation.model';

export class Department implements IComputeAllocation {
  name: string;
  employees: {[key: string]: Employee};
  employeeLength: number;

  constructor(name: string) {
    this.name = name;
    this.employees = {};
    this.employeeLength = 0;
  }

  addEmployees(employees: Employee[]): void {
    employees.forEach(employee => {
      this.employees[employee.id] = employee;
      this.employeeLength += 1;
    });
  }

  removeEmployee(employeeID: string): void {
    delete this.employees[employeeID];
    this.employeeLength -= 1;
  }

  computeTotalAllocation(depth: number = 2): number {
    // ToDo
    return 0;
  }
}
