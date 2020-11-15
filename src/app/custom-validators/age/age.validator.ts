// Load from node_modules
import { AbstractControl } from '@angular/forms';

/**
 * @desc the function validates age
 * @param {AbstractControl} control // form control
 * @public
 */
export function AgeValidator(control: AbstractControl): { [key: string]: string } | null {
  const val = Number(control.value);
  const regex = /^[0-9]*$/;

  if (val > 140 || val < 1) {
    return { age: 'Such an age is not possible' };
  } else if (Number.isNaN(val)) {
    return { age: 'Non numeric values are not allowed' };
  } else if (!regex.test(control.value)) {
    return { age: 'Non numeric values are not allowed' };
  }
  return null;
}
