import { Employee, EmployeeType } from './employee.model';

export class Developer extends Employee {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName, EmployeeType.D, 1000);
  }
}
