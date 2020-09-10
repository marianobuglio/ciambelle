import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  token: any;
  error:any
  private formSubmitAttempt: boolean;
  constructor(  private fb: FormBuilder, private authService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
  debugger
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(
        res => {
        this.token = res['user'].token;
        localStorage.setItem('token', this.token);
        localStorage.setItem('user', JSON.stringify(res['user']));
        this.router.navigate(['/']); 
        },
        err => this.error = err.error.message,
      ) ; 
    }
    this.formSubmitAttempt = true;             // {8}
  }
}
