import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { AuthToken } from '../common/constants';
import { parseJwt } from '../common/parseJwt';
import { AuthenLoginReps } from '../models/dtos/authen-login-reps';
import { AuthenLoginReq } from '../models/dtos/authen-login-req';
import { User } from '../models/user.model';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenApi: string;
  private currentUser: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);

  constructor(private readonly httpClient: HttpClient,
              private readonly cokkiService: CookieService,
              private readonly router: Router,
              private readonly notificationService: NotificationService
  ) {
    this.authenApi = new URL(`/api/authentication`, environment.apiUrl).href
    let token = this.cokkiService.get(AuthToken)
    if(!!token && token != '') {
       this.JwtCurrentuser(token)
    }
  }

  public get currentUser$(): User {
    return this.currentUser.value
  }
     

  loginUser(req: AuthenLoginReq) {
    return this.httpClient.post<AuthenLoginReps>(this.authenApi + `/login`, req).subscribe({
      next: (reps) => {
        this.cokkiService.put(AuthToken, reps.token, { expires: new Date(reps.expires) })
        this.JwtCurrentuser(reps.token);
        this.router.navigate(['home'])
        this.notificationService.showInfo('info','Nói cho bạn nghe','Bạn đã đăng nhâp thành công')
      },
      error: (error) => {
        this.notificationService.showError('error','Nói cho bạn nghe','Sai tên đăng nhập hoặc mật khẩu')
        console.log(error)
      }
    })
  }

  logoutUser() {
    this.currentUser.next({} as User);
    this.cokkiService.remove(AuthToken);
    this.router.navigate(['login']);
  }

  JwtCurrentuser(token: string) {
    let currentUser$ = parseJwt(token);
    this.currentUser.next(currentUser$);

  }

}
