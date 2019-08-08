import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  counter4: number = 0;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.counter1 = this.employeeService.counter1;
    this.counter2 = this.employeeService.counter2;
    this.counter3 = this.employeeService.counter3;
    this.counter4 = this.employeeService.counter4;
  }

}
