import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {TableComponent} from './table/table.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CarouselModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    TableComponent
  ]
})
export class ComponentsModule {
}
