import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import{ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();


   id = Number(this.route.snapshot.paramMap.get('id'));
   id1 = this.route.snapshot.params['id'];

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }

  private getEmployeeById() {

    this.employeeService.getEmployeeById(this.id1).subscribe(data => this.employee = data);
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id1,this.employee).subscribe(data => {this.employee = data;this.router.navigate(['employees'])})

  }
}
