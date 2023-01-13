import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { NoteWebAppComponent } from './components/note-web-app/note-web-app.component';
import { GuardAuthenService } from './services/guard-service/guard-authen.service';
import { GuardLoginService } from './services/guard-service/guard-login.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginUserComponent,
    canActivate: [GuardLoginService]
  },
  {
    path: 'home',
    component: NoteWebAppComponent,
    canActivate: [GuardAuthenService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
