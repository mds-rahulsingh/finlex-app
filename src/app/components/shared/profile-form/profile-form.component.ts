// Load from node_modules
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// Load from src directory
import { AgeValidator } from '../../../custom-validators/age/age.validator';
import { ProfileMode, ApiMessages, RegEx } from '../../../constants/misc.constants';
import { EmployeeService } from '../../../services/employee/employee.service';
import { SalaryValidator } from '../../../custom-validators/salary/salary.validator';
import { NameValidator } from '../../../custom-validators/name/name.validator';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  // input from parent component
  @Input() mode: string;
  // input from parent component
  @Input() formData: any;
  // registration form
  registerForm: FormGroup;

  /**
   * @desc constructor function
   */
  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  /**
   * @desc the function initializes
   */
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      employee_age: ['', [Validators.required, AgeValidator]],
      employee_name: ['', [Validators.required, NameValidator]],
      employee_salary: ['', [Validators.required, SalaryValidator]],
      profile_image: ['', [Validators.required, Validators.pattern(RegEx.URL_REGEX)]]
    });

    if (this.mode === ProfileMode.EDIT_MODE) {
      this.registerForm.addControl('id', new FormControl('', Validators.required));
      this.setValueToForm();
    }
  }

  /**
   * @desc the function sets value to the form
   * @public
   */
  setValueToForm(): void {
    if (this.formData) {
      this.registerForm.patchValue(this.formData);
    }
  }

  /**
   * @desc get function returns form instance
   * @public
   */
  get f() {
    return this.registerForm.controls;
  }

  /**
   * @desc the function handles submit button click
   * @public
   */
  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    let data = { ...this.registerForm.value, employee_age: Number(this.registerForm.value.employee_age)};
    data = { ...this.registerForm.value, employee_salary: Number(this.registerForm.value.employee_salary)};

    if (this.mode === ProfileMode.EDIT_MODE) {
      this.employeeService
      .updateEmployee(data.id, data).subscribe(response => {
        this.toastr.success(response.message || ApiMessages.UPDATE_EMPLOYEE);
        this.gotoList();
      },
      error => {
        this.toastr.error(error.statusText || ApiMessages.SOMETHING_WENT_WRONG);
      }
      );
    } else {
      this.employeeService.createEmployee(data).subscribe(response => {
        this.toastr.success(response.message || ApiMessages.CREATE_EMPLOYEE);
        this.gotoList();
      }, error => {
        this.toastr.error(error.statusText || ApiMessages.SOMETHING_WENT_WRONG);
      });
    }
  }

  /**
   * @desc the function navigates to employee list page
   * @public
   */
  gotoList(): void {
    this.router.navigate(['/employees']);
  }

}
