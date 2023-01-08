import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { FileSaverService } from 'ngx-filesaver';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

import { DialogsComponent } from '../shared/dialogs/dialogs.component';

@Component({
  selector: 'app-note-web-app',
  templateUrl: './note-web-app.component.html',
  styleUrls: ['./note-web-app.component.scss']
})
export class NoteWebAppComponent implements OnInit{

  message: string
  constructor(private readonly cokki: CookieService,
              private readonly dialog: DialogsComponent,
              private readonly fileSaverService: FileSaverService,
              private readonly EventService: EventService
     ) { }

  id: 1
  urlfb = 'https://www.facebook.com/profile.php?id=100005897110987&mibextid=LQQJ4d';
  urlig = 'https://www.instagram.com/ntanh_03/';
  isshowul = true;
  isshowulone = false;
  isshowultwo = true;
  iseditting = true;

  ngOnInit(): void {
    let valuePrv = this.cokki.get("dataNote")
    this.message = valuePrv
    this.EventService.getEvent(this.id).subscribe(
      (response) => {this.message = response},
      (error) => {console.log(error)}
    )
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

  download() {
    const fileName = 'Note.txt'
    const fileType = this.fileSaverService.genType(fileName)
    const txtBlob = new Blob([this.message],{type: fileType})
    this.fileSaverService.save(txtBlob, fileName)
  }
  
}
 
