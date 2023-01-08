import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-child-change',
  templateUrl: './child-change.component.html',
  styleUrls: ['./child-change.component.scss']
})
export class ChildChangeComponent implements OnChanges, OnDestroy {
 
  dataSource: Event;
  id: 1
  name: "asda"
  
  @Input() message!: string;

  constructor(private readonly cokki: CookieService, private readonly eventService: EventService) {}


  ngOnDestroy(): void {
    this.eventService.updateEvent({
      id: this.id,
      messager: this.message,
      name: this.name
    })
  }
  // ngOnInit(): void {
  //   let previousValue = (sessionStorage["dataNote"])

  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.message)
    if(!!changes) {
      this.cokki.set("dataNote",this.message, 214)
    }
  }
 
}
