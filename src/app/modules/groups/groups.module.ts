import {NgModule} from '@angular/core';
import {GroupsComponent} from './groups.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {path: '', component: GroupsComponent}
];

@NgModule({
  declarations: [GroupsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class GroupsModule {
}
