import {
  Component,
  OnInit,
} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { DialogsComponent } from '../shared/dialogs/dialogs.component';

@Component({
  selector: 'app-note-web-app',
  templateUrl: './note-web-app.component.html',
  styleUrls: ['./note-web-app.component.scss']
})
export class NoteWebAppComponent implements OnInit{
  constructor(private readonly cokki: CookieService, private readonly dialog: DialogsComponent) { }
  
  urlfb = 'https://www.facebook.com/profile.php?id=100005897110987&mibextid=LQQJ4d';
  urlig = 'https://www.instagram.com/ntanh_03/';
  message = '';
  isshowul = true;
  isshowulone = false;
  isshowultwo = true;
  iseditting = true;

  ngOnInit(): void {
    let valuePrv = this.cokki.get("dataNote")
    this.message = valuePrv
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
    if (!this.iseditting) {
      this.iseditting = this.iseditting
    } else(!!this.iseditting) 
      this.iseditting = !this.iseditting
  }

  opentabfb() {
    window.open(this.urlfb,"_blank")
  }

  opentabig() {
    window.open(this.urlig, "_blank")
  }

  deleteAll() {
    this.dialog.delete()
  }

  search() {
  }

  download() {}
  
}
 
