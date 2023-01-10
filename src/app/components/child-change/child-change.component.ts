import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-child-change',
  templateUrl: './child-change.component.html',
  styleUrls: ['./child-change.component.scss']
})
export class ChildChangeComponent implements OnChanges, DoCheck {
 
  id: number
  oldMessage: string
  
  @Input() message!: string;

  constructor(private readonly cokki: CookieService,
              private readonly eventService: EventService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.message)
    if(!!changes) {
      this.cokki.set("dataNote",this.message, 214)
    }
  }

  ngDoCheck(): void {
    if(this.oldMessage !== this.message) {
      this.eventService.updateEvent(this.id)}
  }

 
}
