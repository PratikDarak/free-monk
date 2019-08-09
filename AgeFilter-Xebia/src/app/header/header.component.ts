import { Component, OnInit, OnChanges } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  lastFilter: number;
  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  counter4: number = 0;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.filterSelected
    .subscribe(data => {
      this.lastFilter = data;
    });
    console.log("NgOnInit");
    this.counter1 = this.employeeService.counter1;
    this.counter2 = this.employeeService.counter2;
    this.counter3 = this.employeeService.counter3;
    this.counter4 = this.employeeService.counter4;
  }

  onFilterSelect(i: number) {
    if(this.lastFilter === i) {
      this.employeeService.filterSelected.next(0);
      this.lastFilter = 0;
    } else {
      this.employeeService.filterSelected.next(i);
      this.lastFilter = i;
    }
  }

  ngOnChanges() {
    console.log("NgOnChanges");
    this.counter1 = this.employeeService.counter1;
    this.counter2 = this.employeeService.counter2;
    this.counter3 = this.employeeService.counter3;
    this.counter4 = this.employeeService.counter4;
  }
}
