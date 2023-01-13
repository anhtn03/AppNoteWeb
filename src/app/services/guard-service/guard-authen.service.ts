import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthenService implements CanActivate {

  constructor(private authService: AuthenticationService, private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data['expectedRole'] || 0;

    if (!this.authService.currentUser$.id) {
      this.router.navigate(['login']);
      return false;
    }

    if (this.authService.currentUser$.role < expectedRole) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
