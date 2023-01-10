import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CookieService } from 'ngx-cookie-service';
import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ChildChangeComponent,
} from './components/child-change/child-change.component';
import {
  NoteWebAppComponent,
} from './components/note-web-app/note-web-app.component';
import {
  DialogsComponent,
} from './components/shared/dialogs/dialogs.component';
import { DialogDownloadComponent } from './components/shared/dialog-download/dialog-download.component';
import { HighlighterPipe } from './pipe/highlighter.pipe';
import { FileSaverModule } from 'ngx-filesaver';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UserManagerComponent } from './components/user-manager/user-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteWebAppComponent,
    ChildChangeComponent,
    DialogsComponent,
    DialogDownloadComponent,
    HighlighterPipe,
    LoginUserComponent,
    UserManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ToastModule,
    FileSaverModule,
    HttpClientModule

  ],
  providers: [CookieService, ConfirmDialogModule, ConfirmationService, MessageService, DialogsComponent, HttpClient],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
