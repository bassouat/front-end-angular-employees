import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private employeesUrl = "http://localhost:8080/api/basseydou/employees/"

  /*Get employees from the server*/
  getEmployeesList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.employeesUrl}`);
  }
}
