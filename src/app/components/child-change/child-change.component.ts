import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-child-change',
  templateUrl: './child-change.component.html',
  styleUrls: ['./child-change.component.scss']
})
export class ChildChangeComponent implements OnChanges {
 
  @Input() message!: string;

  constructor(private readonly cokki: CookieService) {}
  // ngOnInit(): void {
  //   let previousValue = (sessionStorage["dataNote"])

  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.message)
    if(!!changes) {
      let data = this.message.replace("<p>", "").replace("</p>","")
      if(this.message == null) {
      this.cokki.set("dataNote",data, 214)
      }
    }
  }
 
}
