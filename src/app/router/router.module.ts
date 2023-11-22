import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterRoutingModule } from './router-routing.module';
import { HeaderComponentComponent } from '../components/header-component/header-component.component';
import { EmployeeComponent } from '../components/employee/employee.component';


@NgModule({
  declarations: [
    HeaderComponentComponent,
    EmployeeComponent
  ],
  exports: [
    HeaderComponentComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterRoutingModule,
    HeaderComponentComponent,
    EmployeeComponent
  ]
})
export class RouterModule { }
