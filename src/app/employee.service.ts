import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:8080/api/v1/employees";

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(`${this.url}`, employee);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  updateEmployee(employee: Employee, id:number): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/${id}`);
  };

}
