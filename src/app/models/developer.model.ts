import { Employee, EmployeeType } from './employee.model';

export class Developer extends Employee {
  allocation = 1000;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName, EmployeeType.D);
  }
}
