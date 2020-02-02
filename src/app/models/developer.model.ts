import { uniqid } from './__helpers__/uniqid';
import { IEmployee, EmployeeType, EmployeeAllocation } from './employee.model';

export class Developer implements IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  employeeType: EmployeeType;
  allocation: number;

  constructor(firstName: string, lastName: string) {
    this.id = uniqid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeType = EmployeeType.D;
    this.allocation = EmployeeAllocation.D;
  }
}
