// Load from node_modules
import { Component } from '@angular/core';
// Load from src directory
import { ProfileMode } from '../../constants/misc.constants';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {

  // add/edit mode
  mode = ProfileMode.ADD_MODE;
  // form data
  formData = null;

  /**
   * @desc constructor function
   */
  constructor() { }

}
