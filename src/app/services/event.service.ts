import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { UpdateEventReq } from '../models/dtos/update-event-req';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  dataSource: Event
  private readonly eventApi: string


  constructor(private httpClient: HttpClient) {
    this.eventApi = new URL(`/api/event`, environment.apiUrl).href;
   }

   getEvent(id: number) {
    return this.httpClient.post<string>(this.eventApi + `${id}/get-event`, id)
   }

   updateEvent(req: UpdateEventReq) {
    return this.httpClient.put(this.eventApi + `${req.id}/update-event`, req)
   }
}
