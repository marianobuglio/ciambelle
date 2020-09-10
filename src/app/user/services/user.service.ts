import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private signupUrl = 'http://localhost:3000/api/users/signup'
  private signInUrl = 'http://localhost:3000/api/users/login'
  token: any;
  constructor(private http: HttpClient,private router : Router) { }

  signup(data:any) {
    return this.http.post(this.signupUrl,data);
  }
  get isLoggedIn() {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;// {2}
  }
  login(data: any){
    debugger
    return this.http.post(this.signInUrl,data)     
  }

  // logout() {                            // {4}
  //   this.loggedIn.next(false);
  //   this.router.navigate(['/login']);
  // }
}
