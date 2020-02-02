import { IEmployee, EmployeeType } from './employee.model';

export abstract class EmployeeGroup {
  employees: {[key: string]: IEmployee};
  employeeLength: number;

  constructor() {
    this.employees = {};
    this.employeeLength = 0;
  }

  addEmployees(employees: IEmployee[]): void {
    employees.forEach(employee => {
      this.employees[employee.id] = employee;
      this.employeeLength += 1;
      if (employee.employeeType !== EmployeeType.M) {
        this.computeTotalAllocation(employee.allocation, true);
      }
    });
  }

  removeEmployee(employeeID: number): void {
    const employee = this.employees[employeeID];

    if (employee) {
      delete this.employees[employeeID];

      if (employee.employeeType !== EmployeeType.M) {
        this.computeTotalAllocation(employee.allocation, false);
      }
      this.employeeLength -= 1;
    }
  }

  abstract computeTotalAllocation(allocation: number, add: boolean): void;
  abstract getName(): string;
}
