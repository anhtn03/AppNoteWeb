import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

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
      this.cokki.set("dataNote",this.message, 214)
    }
  }
 
}
