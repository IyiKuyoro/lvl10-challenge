import { Department } from '../department.model';
import { Developer } from '../developer.model';
import { QATester } from '../qatester.model';
import { Manager } from '../manager.model';

describe('Department', () => {
  let department: Department;

  beforeEach(() => {
    department = new Department('Accounts');
  });

  it('should have correct name', () => {
    expect(department.name).toBe('Accounts');
  });

  it('should add employee', () => {
    const employee = new Developer('John', 'Doe');

    department.addEmployees([employee]);

    expect(department.employeeLength).toEqual(1);
    expect(department.employees[employee.id].firstName).toEqual('John');
  });

  it('should remove employee', () => {
    const employee1 = new Developer('John', 'Doe');
    const employee2 = new Developer('Nick', 'Fin');

    department.addEmployees([employee1]);
    department.addEmployees([employee2]);

    department.removeEmployee(employee1.id);

    expect(department.employeeLength).toEqual(1);
    expect(department.employees[employee1.id]).toEqual(undefined);
  });

  it('should compute total allocation', () => {
    const employee1 = new Developer('John', 'Doe');
    const employee2 = new Developer('Nick', 'Fin');
    const employee3 = new QATester('Steve', 'Blanc');

    department.addEmployees([employee1]);
    department.addEmployees([employee2]);
    department.addEmployees([employee3]);

    expect(department.getTotalAllocation()).toEqual(7000);
  });

  it('should compute total allocation more than 2 levels deep', () => {
    const employee1 = new Developer('John', 'Doe');
    const employee2 = new Developer('Nick', 'Fin');
    const employee3 = new QATester('Steve', 'Blanc');
    const employee4 = new QATester('Jane', 'McFarlane');
    const employee5 = new Manager('Steve', 'David');
    const employee6 = new Manager('Jack', 'Woods');
    const employee7 = new Manager('James', 'Foo');

    employee6.addEmployees([employee4]);
    employee5.addEmployees([employee1, employee2, employee3, employee6]);
    employee7.addEmployees([employee5]);

    department.addEmployees([employee7]);

    expect(department.getTotalAllocation()).toEqual(102000);
  });

  it('should compute total allocation if an employee is removed', () => {
    const employee1 = new Developer('John', 'Doe');
    const employee2 = new Developer('Nick', 'Fin');
    const employee3 = new QATester('Steve', 'Blanc');
    const employee4 = new QATester('Jane', 'McFarlane');
    const employee5 = new Manager('Steve', 'David');
    const employee6 = new Manager('Jack', 'Woods');
    const employee7 = new Manager('James', 'Foo');

    employee6.addEmployees([employee4]);
    employee5.addEmployees([employee1, employee2, employee3, employee6]);
    employee7.addEmployees([employee5]);

    department.addEmployees([employee7]);

    employee5.removeEmployee(employee2.id);
    employee5.removeEmployee(employee3.id);

    expect(department.getTotalAllocation()).toEqual(96000);
  });
});
