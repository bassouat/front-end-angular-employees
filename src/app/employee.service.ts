import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private employeesUrl = "http://localhost:8080/api/basseydou/employees"

  /*Get employees from the server*/
  getEmployeesList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.employeesUrl}`);
  }

  /*Add an employee to the server*/
  createEmployee(newEmployee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.employeesUrl}`,newEmployee);
  }

  /*Get employee by id*/
  getEmployeeById(employeeId:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.employeesUrl}/${employeeId}`);

  }

  /*Update employee*/
  updateEmployee(employeeId:number,newEmployee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.employeesUrl}/${employeeId}`,newEmployee);
  }
  /*Delete an employee*/
  deleteEmployee(employeeId:number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.employeesUrl}/${employeeId}`);
  }
}
