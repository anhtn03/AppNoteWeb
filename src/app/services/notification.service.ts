import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly messageService: MessageService) { }

  showSuccess(message: string, summary: string, detail: string) {
    this.messageService.add
      ({
        severity: message,
        summary: summary,
        detail: detail
      })
  }

  showError(message: string, summary: string, detail: string) {
    this.messageService.add({
      severity: message,
      summary: summary,
      detail: detail
    })
  }

  showInfo(message: string, summary: string, detail: string) {
    this.messageService.add({
      severity: message,
      summary: summary,
      detail: detail
    })
  }
}
