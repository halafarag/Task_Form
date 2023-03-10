import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = ` http://localhost:3000/employess`;
  constructor(private http: HttpClient) {}
  addEmployee(emp: object): Observable<Employee> {
    return this.http.post<Employee>(this.url, emp);
  }
  getALLEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
