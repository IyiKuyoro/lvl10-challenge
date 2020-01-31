import { Employee, EmployeeType } from '../employee.model';

describe('Employee', () => {
  let employee: Employee;

  beforeAll(() => {
    employee = new Employee('John', 'Doe', EmployeeType.D, 1000);
  });

  it('should have type developer', () => {
    expect(employee.employeeType).toBe('developer');
  });

  it('should have id', () => {
    expect(employee.id).toBeTruthy();
  });

  it('should have correct first and last name', () => {
    expect(employee.firstName).toBe('John');
    expect(employee.lastName).toBe('Doe');
  });
});
