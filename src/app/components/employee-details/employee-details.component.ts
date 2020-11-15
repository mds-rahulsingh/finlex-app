// Load from node_modules
import { Component } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
// Load from src directory
import { Employee } from '../../models/employee/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {

  // employee input from parent component
  employee: Employee;

  /**
   * @desc constructor function
   */
  constructor(
    public modalRef: MDBModalRef
  ) { }
}
