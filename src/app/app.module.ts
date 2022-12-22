import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteWebAppComponent } from './components/note-web-app/note-web-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {EditorModule} from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { ChildChangeComponent } from './components/child-change/child-change.component';
import { CookieService } from 'ngx-cookie-service';

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
    EditorModule,
    FormsModule

  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
