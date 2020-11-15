// Load from node_modules
import { AbstractControl } from '@angular/forms';

/**
 * @desc the function validates name
 * @param {AbstractControl} control // form control
 * @public
 */
export function NameValidator(control: AbstractControl): { [key: string]: string } | null {
  const val = control.value;
  const regex = /^[a-zA-Z ]*$/;

  if (val.trim() === '') {
    return { name: 'Name cannot be empty string' };
  } else if (!regex.test(val)) {
    return { name: 'Name should not contain special characters or numbers' };
  }
  return null;
}
