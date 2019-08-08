import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  onFilterSelect(i: number) {
    this.employeeService.filterSelected.next(i);
  }
}
