import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  page: number = 1;
  selectedOption: number = 10;
  filterSelected: number = 0;
  ageSorted: boolean = false;
  filterString: string[] = ["Below 20yrs","20 to 40yrs","40 to 60yrs","Above 60yrs"];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data;
        this.employeeService.updateCounters(this.employees);
      });
    
    this.employeeService.filterSelected
      .subscribe(data => {
        this.filterSelected = data;
      });
  }

  onAgeSort() {
    if(!this.ageSorted) {
      this.ageSorted = true;
      this.employees.sort((a,b) => {
        return a.empAge-b.empAge;
      });  
    } else {
      this.employees.reverse();
    }
  }

  onIdSort() {
    return this.employees.reverse();
  }

  onFilterSelect(i: number) {
    this.employeeService.filterSelected.next(0);
  }
}
