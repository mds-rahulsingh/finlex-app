// Load from node_modules
import { FormControl } from '@angular/forms';
// Load from src directory
import { NameValidator } from './name.validator';

// Test Case: NameValidator
describe('NameValidator', () => {
  const control = new FormControl('input');

  it('should pass', () => {
    control.setValue('some value');
    expect(NameValidator(control)).toBeNull();
  });

  it('should throw error when name is empty string', () => {
    control.setValue('  ');
    expect(NameValidator(control)).toEqual({ name: 'Name cannot be empty string' });
  });

  it('should throw error when name contains numbers/special characters', () => {
    control.setValue('67%%%Tom');
    expect(NameValidator(control)).toEqual({ name: 'Name should not contain special characters or numbers' });
  });

});
