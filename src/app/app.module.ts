import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CookieService } from 'ngx-cookie-service';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ChildChangeComponent,
} from './components/child-change/child-change.component';
import {
  NoteWebAppComponent,
} from './components/note-web-app/note-web-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteWebAppComponent,
    ChildChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    InputTextareaModule

  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
