import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  public isAccept: any
  constructor(private readonly confirmDialog: ConfirmationService,
              private readonly cokki: CookieService,
              private readonly notificationService: NotificationService) {
  }

  delete() {
    this.confirmDialog.confirm({
      message: 'Bạn chắc chắn muốn xoá hết dữ liệu đã Note chứ?',
      header: 'Hỏi lại cho chắc nè',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cokki.delete("dataNote")
        this.notificationService.showSuccess('success', 'Thông báo', 'Bạn đã xóa thành công')
      },
      reject: () => {
        this.confirmDialog.close
      }
    })
  }
}
