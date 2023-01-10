import {
  Component,
  OnInit,
} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { FileSaverService } from 'ngx-filesaver';
import { LinkInfoMyself } from 'src/app/common/constants';
import { EventService } from 'src/app/services/event.service';

import { DialogsComponent } from '../shared/dialogs/dialogs.component';

@Component({
  selector: 'app-note-web-app',
  templateUrl: './note-web-app.component.html',
  styleUrls: ['./note-web-app.component.scss']
})
export class NoteWebAppComponent implements OnInit{

  message: string
  name: "Tuananh"
  id: 1
  isshowul = true;
  isshowulone = false;
  isshowultwo = true;
  iseditting = true;
  
  
  constructor(private readonly cokki: CookieService,
              private readonly dialog: DialogsComponent,
              private readonly fileSaverService: FileSaverService,
              private readonly eventService: EventService
     ) { }

  ngOnInit(): void {
    let valuePrv = this.cokki.get("dataNote")
    this.message = valuePrv
    this.eventService.getEvent({
      id: this.id,
      name: this.name,
    }).subscribe(
      (response) => { this.message = response.message},
      (error) => { console.log(error) }
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
    window.open(LinkInfoMyself.FaceBook,"_blank")
  }

  opentabig() {
    window.open(LinkInfoMyself.Instagram, "_blank")
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
 
