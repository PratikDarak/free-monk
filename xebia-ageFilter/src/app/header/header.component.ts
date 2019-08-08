import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  lastFilter: number;
  filterString: string[] = ["Below 20yrs","20 to 40yrs","40 to 60yrs","Above 60yrs"];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  onFilterSelect(i: number) {
    if(this.lastFilter === i) {
      this.employeeService.filterSelected.next(0);
      this.lastFilter = 0;
    } else {
      this.employeeService.filterSelected.next(i);
      this.lastFilter = i;
    }
  }
}
