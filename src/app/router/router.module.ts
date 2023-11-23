import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterRoutingModule } from './router-routing.module';
import { HeaderComponentComponent } from '../components/header-component/header-component.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { TruckComponent } from '../components/truck/truck.component';


@NgModule({
  declarations: [
  ],
  exports: [
    HeaderComponentComponent,
    EmployeeComponent,
    TruckComponent
  ],
  imports: [
    CommonModule,
    RouterRoutingModule,
    HeaderComponentComponent,
    EmployeeComponent,
    TruckComponent
  ]
})
export class RouterModule { }
