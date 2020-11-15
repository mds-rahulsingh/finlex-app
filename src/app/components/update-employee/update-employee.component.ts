// Load from node_modules
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Load from src directory
import { Employee } from '../../models/employee/employee';
import { ProfileMode, ApiMessages } from '../../constants/misc.constants';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  // employee id
  id: number;
  // edit mode of the form
  mode = ProfileMode.EDIT_MODE;
  // employee data
  formData: Employee;
  // error boolean to check whether the
  isError = false;

  /**
   * @desc constructor function
   */
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private employeeService: EmployeeService
  ) { }

  /**
   * @desc the function initializes
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getEmployee();
  }

  /**
   * @desc the function fetches employee details
   * @public
   */
  getEmployee(): void {
    this.employeeService.getEmployee(this.id).subscribe(response => {
      this.isError = false;
      this.formData = response.data;
      this.toastr.success(response.message || ApiMessages.FETCH_EMPLOYEE_DETAILS);
    }, error => {
      this.formData = null;
      this.isError = true;
      this.toastr.error(error.statusText || ApiMessages.SOMETHING_WENT_WRONG);
    });
  }
}
