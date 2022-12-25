import {
  Component,
  OnInit,
} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-note-web-app',
  templateUrl: './note-web-app.component.html',
  styleUrls: ['./note-web-app.component.scss']
})
export class NoteWebAppComponent implements OnInit{
  constructor(private readonly cokki: CookieService){}
  message = '';
  dataNote = '';
  isshowul = true;
  isshowulone = false;
  isshowultwo = true;
  iseditting = true;

  ngOnInit(): void {
    let valuePrv = this.cokki.get("dataNote")
    this.message = valuePrv
    this.dataNote = valuePrv
  }

  toggle() {
    this.isshowul = !this.isshowul
    this.isshowulone = !this.isshowulone
  }

  toggleone() {
    this.isshowul = !this.isshowul
    this.isshowulone = !this.isshowulone
  }

  show() {
    this.isshowultwo = !this.isshowultwo
  }

  editting() {
    this.iseditting = !this.iseditting
  }
  
}
 
