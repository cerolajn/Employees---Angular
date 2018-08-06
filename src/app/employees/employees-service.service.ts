import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Employees} from './employees';

@Injectable()
export class EmployeesServiceService {

//JSON URL
  private employeesJSON = './assets/JSONdata/employees.json';

  constructor(private http: HttpClient) {}

  // GET EMPLOYEES
  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.employeesJSON)
      .pipe(
        catchError(this.handleError('getEmployees', []))
      );
  }

  // ERROR HANDLING
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `Operation: ${operation}`);
      return of(result as T);
    };
  }
}
