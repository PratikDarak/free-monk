import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Employee } from './employee.model';

@Injectable({providedIn: "root"})
export class EmployeeService {
    private employees: Employee[] = [];
    private _url : string = "/assets/data/employees.json";
    filterSelected = new Subject<number>();
    countersUpdated = new Subject<number[]>();

    constructor(private http: HttpClient) {}

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this._url);    
    }

    updateCounters(emps : Employee[]) {
        let counter1: number = 0;
        let counter2: number = 0;
        let counter3: number = 0;
        let counter4: number = 0;
        for(let i=0; i < emps.length; i++) {
            if(emps[i].empAge<20) {
                counter1++;
            } else if(emps[i].empAge>=20 && emps[i].empAge<=40) {
                counter2++;
            } else if(emps[i].empAge>40 && emps[i].empAge<=60) {
                counter3++;
            } else if(emps[i].empAge>60){
                counter4++;
            }
        }
        this.countersUpdated.next([counter1,counter2,counter3,counter4]);
    }
}