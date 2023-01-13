import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map, startWith, Subject, tap, withLatestFrom } from 'rxjs';
import { AuthenLoginReq } from 'src/app/models/dtos/authen-login-req';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  formSubmit$ = new Subject<void>();

  constructor(private readonly authticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.formSubmit$.pipe(
      withLatestFrom(this.loginform.valueChanges.pipe(startWith({}))),
      map(([, loginValue]) => loginValue as AuthenLoginReq),
      filter((value) => {
        return !!value.username || !!value.password
      }),
      tap((value) => {
        value.password = value.password
      })).subscribe((value) => {
        this.authticationService.loginUser(value)
      })
  }

}
