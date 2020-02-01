import { uniqid } from './__helpers__/uniqid';
import { IEmployee, EmployeeType, EmployeeAllocation } from './employee.model';

export class QATester implements IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  employeeType: EmployeeType;
  allocation: number;

  constructor(firstName: string, lastName: string) {
    this.id = uniqid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeType = EmployeeType.QA;
    this.allocation = EmployeeAllocation.QA;
  }
}
