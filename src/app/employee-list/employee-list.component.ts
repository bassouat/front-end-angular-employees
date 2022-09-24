import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService:EmployeeService) {
  }

  ngOnInit(): void {
    /*this.employees = [{"id": 1, "firstName": "Bouchra", "lastName": "Bouffon", "emailId": "bass1@gmail.com"},
      {"id": 2, "firstName": "Mateo", "lastName": "Ali", "emailId": "stark1@yahoo.fr"},
      {"id": 3, "firstName": "Yan", "lastName": "Murphy", "emailId": "Murphy@hotmail.fr"},
      {"id": 4, "firstName": "Mathias", "lastName": "Quentin", "emailId": "Robert@live.fr"}];*/
    this.getEmployeeList();



  }

  getEmployeeList():void {
    this.employeeService.getEmployeesList().subscribe(data =>{this.employees=data});

  }


  updateEmployee(id: number) {

  }
}
