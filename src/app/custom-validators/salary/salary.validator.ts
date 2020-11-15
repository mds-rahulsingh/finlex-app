// Load from node_modules
import { AbstractControl } from '@angular/forms';

/**
 * @desc the function validates salary of the employee
 * @param {AbstractControl} control // form control
 * @public
 */
export function SalaryValidator(control: AbstractControl): { [key: string]: string } | null {
  const regex = /^[0-9]*$/;

  if (Number(control.value) < 0) {
    return { salary: 'Salary cannot be less than 0' };
  } else if (!regex.test(control.value)) {
    return { salary: 'Non numeric values are not allowed' };
  }
  return null;
}
