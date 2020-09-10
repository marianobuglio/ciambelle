import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
