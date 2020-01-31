import uniqid from 'uniqid';

export enum EmployeeType {
  QA = 'qa_tester',
  M = 'manager',
  D = 'developer',
}

export class Employee {
  id: string;
  firstName: string;
  lastName: string;
  employeeType: EmployeeType;
  allocation: number;

  constructor(firstName: string, lastName: string, type: EmployeeType, allocation: number) {
    this.id = uniqid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeType = type;
    this.allocation = allocation;
  }
}
