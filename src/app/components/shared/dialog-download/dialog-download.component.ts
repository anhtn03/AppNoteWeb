import { Component } from '@angular/core';

import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-dialog-download',
  templateUrl: './dialog-download.component.html',
  styleUrls: ['./dialog-download.component.scss']
})
export class DialogDownloadComponent {

  constructor(private readonly confirmDialog: ConfirmationService, private readonly messageDialog: MessageService) {}
}
