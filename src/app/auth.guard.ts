import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
@Injectable({
  providedIn: 'root'
})
 
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthserviceService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
   
  }
  
}
