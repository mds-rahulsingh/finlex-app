// Load from node_modules
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
// Load from src directory
import { Employee } from '../../models/employee/employee';
import { ApiMessages } from '../../constants/misc.constants';
import { SearchService } from './../../services/search/search.service';
import { EmployeeService } from './../../services/employee/employee.service';
import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  // employee list
  employees: Employee[];
  // filtered employee list
  filterEmployees: Employee[];
  // check for any api call failure
  isError = false;
  // modal reference
  modalRef: MDBModalRef;

  /**
   * @desc constructor function
   * @param {EmployeeService} employeeService // employee service to use employee APIs
   * @param {SearchService} searchService // mediator search service to search in employee list
   * @param {Router} router // router to handle routing
   * @param {ToastrService} toastr // toaster service to show toaster
   * @param {MDBModalService} modalService //modal service to show details in modal
   */
  constructor(private employeeService: EmployeeService,
              private searchService: SearchService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: MDBModalService) {}

  /**
   * @desc the function initializes
   */
  ngOnInit(): void {
    this.reloadData();

    this.searchService.search.subscribe((searchString) => {
      this.filterEmployees = this.employees.filter(obj => Object.values(obj).some(val => val.toString().includes(searchString)));
    });
  }

  /**
   * @desc this function fetches employee list
   * @public
   */
  reloadData(): void {
    this.employeeService.getEmployeesList().subscribe(response => {
      this.isError = false;
      this.employees =  response.data || [];
      this.filterEmployees = response.data || [];
      this.toastr.success(response.message || ApiMessages.FETCH_ALL_EMPLOYEES);
    }, error => {
      this.employees =  [];
      this.filterEmployees = [];
      this.toastr.error(error.statusText || ApiMessages.SOMETHING_WENT_WRONG);
      this.isError = true;
    });
  }

  /**
   * @desc the function deletes an employee
   * @param {number} id // employee id
   * @public
   */
  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(response => {
      this.reloadData();
      this.toastr.success(response.message || ApiMessages.DELETE_EMPLOYEE);
    }, error => {
      this.toastr.error(error.statusText || ApiMessages.SOMETHING_WENT_WRONG);
    });
  }

  /**
   * @desc thie function opens up the employee details modal
   * @param {Employee} employee // employee details
   * @public
   */
  employeeDetails(employee: Employee): void {
    this.modalRef = this.modalService.show(EmployeeDetailsComponent, {
      data: {
        employee
      }
    });
  }

  /**
   * @desc the function navigates to update employee route
   * @param {number} id // employee id
   * @public
   */
  updateEmployee(id: number): void {
    this.router.navigate(['update', id]);
  }
}
