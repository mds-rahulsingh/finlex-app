// Load from node_modules
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
// Load from src directory
import { EmployeeService } from './employee.service';
import { Api } from '../../constants/misc.constants';
import { Employee } from '../../models/employee/employee';

// Test Case: EmployeeService
describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  // setup before exceution
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [EmployeeService]
      });
      service = TestBed.inject(EmployeeService);
      httpMock = TestBed.inject(HttpTestingController);
  });

  // setup after exceution
  afterEach(() => {
    httpMock.verify();
  });

  // Test Case: Get all employees
  it('be able to retrieve employees from the API via GET', () => {
    const employees: Employee[] = [{
        employee_age: 45,
        employee_name: 'Tony Stark',
        employee_salary: 56000,
        id: 78,
        profile_image: 'https://images.app.goo.gl/PABTRHR3nNk9iGEZ8'
      }, {
        employee_age: 42,
        employee_name: 'Wolverine',
        employee_salary: 60000,
        id: 78,
        profile_image: 'https://images.app.goo.gl/nf3hdpNNDkttaNDX9'
    }];

    service.getEmployeesList().subscribe(employeeList => {
        expect(employeeList.length).toBe(2);
        expect(employeeList).toEqual(employees);
    });

    const request = httpMock.expectOne( `${Api.BASEURL}/employees`);
    expect(request.request.method).toBe('GET');
    request.flush(employees);
  });

  // Test Case: Get employee
  it('be able to retrieve employees from the API via GET', () => {
    const employee: Employee = {
        employee_age: 44,
        employee_name: 'Peter Parker',
        employee_salary: 59000,
        id: 78,
        profile_image: 'https://images.app.goo.gl/SZVdk81snAdJzAfeA'
    };

    const employeeId = 78;

    service.getEmployee(employeeId).subscribe(employeeDetails => {
        expect(employeeDetails.employee_age).toEqual(44);
        expect(employeeDetails.employee_name).toEqual('Peter Parker');
        expect(employeeDetails.employee_salary).toEqual(59000);
        expect(employeeDetails.profile_image).toEqual('https://images.app.goo.gl/SZVdk81snAdJzAfeA');
    });

    const request = httpMock.expectOne( `${Api.BASEURL}/employee/${employeeId}`);
    expect(request.request.method).toBe('GET');
    request.flush(employee);
  });

  // Test Case: Save a new employee
  it('be able to create a new employee using the API via POST', () => {
    const employee: Employee = {
        employee_age: 55,
        employee_name: 'Logan',
        employee_salary: 50000,
        id: 78,
        profile_image: 'https://images.app.goo.gl/JJBnLEnx8bhgfpGv6'
    };

    service.createEmployee(employee).subscribe(newEmployee => {
      expect(newEmployee.employee_age).toEqual(55);
      expect(newEmployee.employee_name).toEqual('Logan');
      expect(newEmployee.employee_salary).toEqual(50000);
      expect(newEmployee.profile_image).toEqual('https://images.app.goo.gl/JJBnLEnx8bhgfpGv6');
    });

    const request = httpMock.expectOne( `${Api.BASEURL}/create`);
    expect(request.request.method).toBe('POST');
    request.flush(employee);
  });

  // Test Case: Update employee details
  it('be able to update an employee using the API via PUT', () => {
    const employee: Employee = {
        employee_age: 48,
        employee_name: 'Bruce Wayne',
        employee_salary: 66000,
        id: 79,
        profile_image: 'https://images.app.goo.gl/HxeRjP7jE6cKuxAV8'
    };

    service.updateEmployee(employee.id, employee).subscribe(newEmployee => {
      expect(newEmployee.employee_age).toEqual(48);
      expect(newEmployee.employee_name).toEqual('Bruce Wayne');
      expect(newEmployee.employee_salary).toEqual(66000);
      expect(newEmployee.profile_image).toEqual('https://images.app.goo.gl/HxeRjP7jE6cKuxAV8');
    });

    const request = httpMock.expectOne( `${Api.BASEURL}/update/${employee.id}`);
    expect(request.request.method).toBe('PUT');
    request.flush(employee);
  });

  // Test Case: Delete an employee
  it('be able to delete an employee using the API via DELETE', () => {
    const employee: Employee = {
        employee_age: 88,
        employee_name: 'Tom Hanks',
        employee_salary: 66000,
        id: 79,
        profile_image: 'https://images.app.goo.gl/HxeRjP7jE6cKuxAV8'
    };

    service.deleteEmployee(employee.id).subscribe(emp => {
      expect(emp.id).toEqual(79);
    });

    const request = httpMock.expectOne( `${Api.BASEURL}/delete/${employee.id}`);
    expect(request.request.method).toBe('DELETE');
    request.flush(employee);
  });

});
