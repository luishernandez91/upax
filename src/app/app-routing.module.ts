import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'employees', loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule)},
  {path: 'groups', loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule)},
  {path: '404', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: '**', pathMatch: 'full', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
