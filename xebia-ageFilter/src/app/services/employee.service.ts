import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './employee.model';

@Injectable({providedIn: "root"})
export class EmployeeService {
    private employees: Employee[] = [];
    private _url : string = "/assets/data/employees.json";
    counter1: number = 0;
    counter2: number = 0;
    counter3: number = 0;
    counter4: number = 0;

    constructor(private http: HttpClient) {}

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this._url);    
    }

    updateCounters(emps : Employee[]) {
        for(let i=0; i < emps.length; i++) {
            if(emps[i].empAge<20) {
                this.counter1++;
            } else if(emps[i].empAge>=20 && emps[i].empAge<=40) {
                this.counter2++;
            } else if(emps[i].empAge>40 && emps[i].empAge<=60) {
                this.counter3++;
            } else if(emps[i].empAge>60){
                this.counter4++;
            }
        }
    }
}