import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { UserService } from '../../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: UserService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>  | Promise<boolean> | boolean {
    
    if(this.authService.isLoggedIn !== true){
      this.router.navigate(['/auth']);  
      return false;
    }else{
      return true;     
    }        
          
      
  }
}