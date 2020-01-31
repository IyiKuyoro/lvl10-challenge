import { Manager } from '../manager.model';
import { Developer } from '../developer.model';
import { QATester } from '../qatester.model';

describe('Manager', () => {
  let manager: Manager;

  beforeEach(() => {
    manager = new Manager('John', 'Doe');
  });

  it('should have type manager', () => {
    expect(manager.employeeType).toBe('manager');
  });

  it('should have id', () => {
    expect(manager.id).toBeTruthy();
  });

  it('should have correct first and last name', () => {
    expect(manager.firstName).toBe('John');
    expect(manager.lastName).toBe('Doe');
  });

  it('should add subordinates', () => {
    const employee = new Developer('John', 'Doe');

    manager.addEmployees([employee]);

    expect(manager.employeeLength).toEqual(1);
    expect(manager.employees[employee.id].firstName).toEqual('John');
  });

  it('should remove employee', () => {
    const employee1 = new Developer('John', 'Doe');
    const employee2 = new Developer('Nick', 'Fin');

    manager.addEmployees([employee1]);
    manager.addEmployees([employee2]);

    manager.removeEmployee(employee1.id);

    expect(manager.employeeLength).toEqual(1);
    expect(manager.employees[employee1.id]).toEqual(undefined);
  });

  it('should compute total allocation', () => {
    const employee1 = new Developer('John', 'Doe');
    const employee2 = new Developer('Nick', 'Fin');
    const employee3 = new QATester('Steve', 'Blanc');

    manager.addEmployees([employee1]);
    manager.addEmployees([employee2]);
    manager.addEmployees([employee3]);

    expect(manager.getTotalAllocation()).toEqual(37000);
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

    manager.addEmployees([employee7]);

    expect(manager.getTotalAllocation()).toEqual(132000);
  });
});
