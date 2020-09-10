import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavsComponent } from './navs/navs.component';
import {NgbDropdownMenu} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NavsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbDropdownMenu
  ]
})
export class HomeModule { }
