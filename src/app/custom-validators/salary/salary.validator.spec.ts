// Load from node_modules
import { FormControl } from '@angular/forms';
// Load from src directory
import { SalaryValidator } from './salary.validator';

// Test Case: SalaryValidator
describe('SalaryValidator', () => {
  const control = new FormControl('input');

  it('should pass', () => {
    control.setValue('45000');
    expect(SalaryValidator(control)).toBeNull();
  });

  it('should throw error when salary is below 0', () => {
    control.setValue('-180');
    expect(SalaryValidator(control)).toEqual({ salary: 'Salary cannot be less than 0' });
  });

  it('should throw error when alphabet values are provided', () => {
    control.setValue('this is a alphabet');
    expect(SalaryValidator(control)).toEqual({ salary: 'Non numeric values are not allowed' });
  });
});
