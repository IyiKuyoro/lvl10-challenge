import uniqid from 'uniqid';
import { IEmployee, EmployeeType, EmployeeAllocation } from './employee.model';

export class QATester implements IEmployee {
  id: string;
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
