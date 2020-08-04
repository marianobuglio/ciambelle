import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
