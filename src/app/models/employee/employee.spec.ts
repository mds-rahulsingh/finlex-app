// Load from src directory
import { Employee } from './employee';

// Test Case: Employee
describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
