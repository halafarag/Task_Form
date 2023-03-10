import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  empList: Employee[] = [];
  numberOfEmployees: number = 0;
  constructor(private empService: EmployeeService) {}
  getAllEmps() {
    this.empService.getALLEmployees().subscribe((data) => {
      this.empList = data;
      this.numberOfEmployees = data.length;
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getAllEmps();
  }
}
