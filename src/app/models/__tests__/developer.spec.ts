import { Developer } from '../developer.model';

describe('Developer', () => {
  let developer: Developer;

  beforeAll(() => {
    developer = new Developer('John', 'Doe');
  });

  it('should have type developer', () => {
    expect(developer.employeeType).toBe('developer');
  });

  it('should have id', () => {
    expect(developer.id).toBeTruthy();
  });

  it('should have correct first and last name', () => {
    expect(developer.firstName).toBe('John');
    expect(developer.lastName).toBe('Doe');
  });
});
