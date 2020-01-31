import { Employee, EmployeeType } from './employee.model';
import { IComputeAllocation } from './IComputeAllocation.model';

export default class Manager extends Employee implements IComputeAllocation {
  allocation = 30000;
  subordinates: {[key: string]: Employee};

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName, EmployeeType.M);
    this.subordinates = {};
  }

  addSubordinate(employee: Employee): void {
    this.subordinates[employee.id] = employee;
  }

  removeEmployee(employeeID: string): void {
    delete this.subordinates[employeeID];
  }

  computeTotalAllocation(depth: number = 2): number {
    // ToDo
    return 0;
  }
}
