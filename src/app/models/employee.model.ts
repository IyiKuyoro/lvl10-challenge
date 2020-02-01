export enum EmployeeType {
  QA = 'qa_tester',
  M = 'manager',
  D = 'developer',
}

export enum EmployeeAllocation {
  QA = 5000,
  M = 30000,
  D = 1000,
}

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  employeeType: EmployeeType;
  allocation: number;
}
