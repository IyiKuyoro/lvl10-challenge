import { Employee, EmployeeType } from './employee.model';

export class QATester extends Employee {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName, EmployeeType.QA, 5000);
  }
}
