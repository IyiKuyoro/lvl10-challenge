import { Employee, EmployeeType } from './employee.model';

export class QATester extends Employee {
  allocation = 5000;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName, EmployeeType.QA);
  }
}
