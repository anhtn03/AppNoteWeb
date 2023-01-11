import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { GetEventReps } from '../models/dtos/get-event-reps';
import { GetEventReq } from '../models/dtos/get-event-req';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventApi: string


  constructor(private readonly httpClient: HttpClient) {
    this.eventApi = new URL(`/api/event`, environment.apiUrl).href;
   }

   getEvent(req: GetEventReq) {
    return this.httpClient.post<GetEventReps>('https://625d4c7a95cd5855d61eafe1.mockapi.io/api/login/tuananh', req)
   }

   updateEvent(id: number) {
    return this.httpClient.put('https://625d4c7a95cd5855d61eafe1.mockapi.io/api/login/tuananh', id)
   }

   deleteEvent(id: number) {
    return this.httpClient.delete(this.eventApi + `/${id}/event-delete`) 
   }
}
