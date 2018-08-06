import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { Employees} from './employees';
import { EmployeesServiceService} from "./employees-service.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeesServiceService]
})
export class EmployeesComponent implements OnInit {

  employees : Employees [];

  //ORDER MODULE
  order: string = 'id';
  reverse: boolean = false;
  sortedCollection: any[];

  //PAGINATION MODULE
  //current page
  currentP:number = 1;

  constructor(private employeesService:EmployeesServiceService,private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.employees, 'id');
    console.log(this.sortedCollection);
  }

  ngOnInit() {
    this.getEmployees();
  }
  //GET LIST OF ALL ITEMS
  getEmployees(): void {
    this.employeesService.getEmployees()
      .subscribe( employees=> this.employees = employees);
  }
  //ORDERING
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
