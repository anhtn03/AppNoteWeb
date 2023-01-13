import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { AuthToken } from 'src/app/common/constants';
import { environment } from 'src/environment/environment';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorAuthorizeService implements HttpInterceptor  {

  constructor(private readonly authticationService: AuthenticationService, private readonly cokkiService: CookieService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cokkiService.get(AuthToken)
    const isLogin = this.authticationService.currentUser$.id
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLogin && isApiUrl && !!token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    return next.handle(request)
  }
}
