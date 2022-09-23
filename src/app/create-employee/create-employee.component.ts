import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router) { }
  employee:Employee = new Employee();
  ngOnInit(): void {

  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee).subscribe(data =>{this.employee=data;this.router.navigate(['employees']);});


  }
}
