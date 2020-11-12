import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private service: EmployeeService, private router: Router) { }

  private getEmployees() {
    this.service.getEmployees().subscribe((data) => {
      this.employees = data;
      console.log(data);
    });
  }

  update(id: number) {
    this.router.navigate(["update-employee", id]);
  }

  delete(id: number) {
    this.service.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
