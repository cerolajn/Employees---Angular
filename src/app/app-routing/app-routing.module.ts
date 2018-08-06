import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from '../employees/employees.component';

const routes: Routes = [
  {
    //start page localhost:4200 - Employee List
    path: '',
    component:EmployeesComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
