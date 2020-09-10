import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../services/user.service'
// import { ServicesService } from './services/services.service';

export class User {
  public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  form: FormGroup;
  public formSubmitAttempt: boolean;
  newUser : User

  constructor( private fb: FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email:new FormControl( '', [Validators.required,Validators.email]),
      password:new FormControl( '', [Validators.required,Validators.minLength(6)]),
      confirmPassword:new FormControl( '',[Validators.required,Validators.minLength(6)])
    },{validator:this.checkPasswords})
  }
   checkPasswords(f:FormGroup){

    debugger
    // here we have the 'passwords' group
    let confirmPass = f.get('confirmPassword').value;
    let pass = f.get('password').value;
      if(confirmPass != pass ){
        return {notSame:  true}
      }else{
       return  null
      }
  
    
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
    debugger
    if (this.form.valid) {
     console.log('registrado')
     this.newUser = new User(this.form.value);
     this.userService.signup(this.newUser)
     .subscribe(results => {
       this.form.reset()
      });
    }
    this.formSubmitAttempt = true;             // {8}
  }

  get formControls() { 
    return this.form.controls; }
}
