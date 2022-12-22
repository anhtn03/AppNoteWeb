import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-note-web-app',
  templateUrl: './note-web-app.component.html',
  styleUrls: ['./note-web-app.component.scss']
})
export class NoteWebAppComponent implements OnInit{
  constructor(private readonly cokki: CookieService){}
  message = '';
  dataNote ='';

  ngOnInit(): void {
    let valuePrv = this.cokki.get("dataNote")
    this.message = valuePrv
    this.dataNote = valuePrv
  }

}
 
