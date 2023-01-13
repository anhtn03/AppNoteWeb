import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginService implements CanActivate {

  constructor(private readonly router: Router,
    private readonly authService: AuthenticationService,) { }

  canActivate() {
    if(this.authService.currentUser$.id) {
       this.router.navigate(['home']);
       return false
    }
    return true
  }
}
