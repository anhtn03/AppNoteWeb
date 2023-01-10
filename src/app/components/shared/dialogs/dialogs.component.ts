import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  public isAccept: any
  constructor(private readonly confirmDialog: ConfirmationService,
              private readonly messageDialog: MessageService,
              private readonly cokki: CookieService) {

  }

  

  delete(){
    this.confirmDialog.confirm({
      message: 'Bạn chắc chắn muốn xoá hết dữ liệu đã Note chứ?',
      header: 'Hỏi lại cho chắc nè',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cokki.delete("dataNote")
        this.messageDialog.add({ severity: 'success', summary: 'Thông báo', detail: 'Bạn đã xoá thành công' });
        
      },
      reject: () => {
        this.confirmDialog.close
      }
    })
  }
}
