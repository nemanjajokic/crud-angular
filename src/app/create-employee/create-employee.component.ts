import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) { }

  employee: Employee = new Employee();

  redirect() {
    this.router.navigate(["/employees"]);
  }

  onCreate() {
    this.service.createEmployee(this.employee).subscribe((data) => {
      console.log(data);
      this.redirect();
    });
  }

  ngOnInit(): void {
  }

}
