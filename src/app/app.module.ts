import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesServiceService} from "./employees/employees-service.service";

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [EmployeesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
