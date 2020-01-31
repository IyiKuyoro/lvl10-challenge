import { Employee, EmployeeType } from './employee.model';
import { IComputeAllocation } from './IComputeAllocation.model';

export class Manager extends Employee implements IComputeAllocation {
  allocation = 30000;
  subordinates: {[key: string]: Employee};
  subordinatesLength: number;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName, EmployeeType.M);
    this.subordinates = {};
    this.subordinatesLength = 0;
  }

  addSubordinates(employees: Employee[]): void {
    employees.forEach((employee) => {
      this.subordinates[employee.id] = employee;
      this.subordinatesLength += 1;
    });
  }

  removeEmployee(employeeID: string): void {
    delete this.subordinates[employeeID];
    this.subordinatesLength -= 1;
  }

  computeTotalAllocation(depth: number = 2): number {
    // ToDo
    return 0;
  }
}
