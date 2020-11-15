// Load from node_modules
import { FormControl } from '@angular/forms';
// Load from src directory
import { AgeValidator } from './age.validator';

// Test Case: AgeValidator
describe('AgeValidator', () => {
  const control = new FormControl('input');

  it('should pass', () => {
    control.setValue('45');
    expect(AgeValidator(control)).toBeNull();
  });

  it('should throw error when age below 0 is provided', () => {
    control.setValue('-10');
    expect(AgeValidator(control)).toEqual({ age: 'Such an age is not possible' });
  });

  it('should throw error when age above 140 is provided', () => {
    control.setValue('180');
    expect(AgeValidator(control)).toEqual({ age: 'Such an age is not possible' });
  });

  it('should throw error when alphabet values are provided', () => {
    control.setValue('this is a alphabet');
    expect(AgeValidator(control)).toEqual({ age: 'Non numeric values are not allowed' });
  });
});
