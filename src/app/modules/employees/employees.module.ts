import {NgModule} from '@angular/core';
import {EmployeesComponent} from './employees.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

const routes: Routes = [
  {
    path: '', component: EmployeesComponent
  }
];

@NgModule({
  declarations: [EmployeesComponent, EmployeeFormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeesModule {
}
