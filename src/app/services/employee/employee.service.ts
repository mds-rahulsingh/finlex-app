// Load from node_modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Load from src directory
import { Api } from '../../constants/misc.constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // the baseurl of the api service
  private baseUrl = Api.BASEURL;

  // initization
  constructor(private http: HttpClient) { }

  /**
   * @desc the function fetches particlar employee
   * @param {number} id // Id of the employee
   * @public
   */
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee/${id}`);
  }

  /**
   * @desc the function creates a new employee
   * @param {object} employee // the new employee details
   * @public
   */
  createEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, employee);
  }

  /**
   * @desc the function creates a new employee
   * @param {number} id // id of the employee
   * @param {object} employee // details of the employee
   * @public
   */
  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, employee);
  }

  /**
   * @desc the function deletes an employee
   * @param {number} id // id of the employee
   * @public
   */
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  /**
   * @desc the function fetches employee list
   * @public
   */
  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees`);
  }
}
