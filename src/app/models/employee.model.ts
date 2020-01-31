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

  constructor(firstName: string, lastName: string, type: EmployeeType) {
    this.id = uniqid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeType = type;
  }
}
