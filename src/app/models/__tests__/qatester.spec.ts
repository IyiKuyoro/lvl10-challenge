import { QATester } from '../qatester.model';

describe('QATester', () => {
  let qa: QATester;

  beforeAll(() => {
    qa = new QATester('John', 'Doe');
  });

  it('should have type developer', () => {
    expect(qa.employeeType).toBe('qa_tester');
  });

  it('should have id', () => {
    expect(qa.id).toBeTruthy();
  });

  it('should have correct first and last name', () => {
    expect(qa.firstName).toBe('John');
    expect(qa.lastName).toBe('Doe');
  });
});
